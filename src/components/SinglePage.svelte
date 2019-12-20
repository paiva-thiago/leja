<script>   
    import {EMPTY_BLOG} from '../Utils.js'
    import LejaLoading from '../LejaLoading.svelte'
    import Boilerplate from './Boilerplate.svelte'
    import {loadError,loadOne,loadOneWithDate} from '../LejaLoad.js'
    export let router = {}    
    async function getData() {
        let data = EMPTY_BLOG
        data.singleText=true
        data.allowComments = true
        try{            
            const resCont = await fetch(`../data/pages/${router.params.title}.md`);
            const txtCont = await resCont.text();
            if(resCont.ok){                        
                data.text = txtCont
            }
        }catch(ex){
            console.error(ex)
            return EMPTY_BLOG
        }
        return data
    }
    let blogData;
    try{
        blogData = getData()
    }catch(e){
        console.error(e)
    }
</script>
{#await blogData}
	<LejaLoading/>
{:then retorno}
    <Boilerplate {retorno}/>
{:catch error}
	<p class="sos">{error.message}</p>
{/await}	
