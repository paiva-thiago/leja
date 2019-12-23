<script>   
    import LejaContentLoader from './LejaContentLoader.svelte'
    import Boilerplate from './Boilerplate.svelte'
    import {getTextData,getBlogData} from '../Utils.js'
    export let router = {}    
    export let errorCode
    export let root = false
    let blogData
    try{
        if(root){
            blogData = getBlogData(true)
        }else if((Number.isInteger(errorCode)) && (errorCode>400)){
            blogData = getTextData(errorCode)
        }else{
            blogData = getTextData(router.params)
        }
    }catch(e){
        console.error(e)        
    }
</script>
{#await blogData}
	<LejaContentLoader/>
{:then retorno}
    <Boilerplate {retorno}/>
{:catch error}
	<p class="sos">{error.message}</p>
{/await}	
