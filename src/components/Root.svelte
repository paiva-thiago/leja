<script>
    import {EMPTY_BLOG} from '../Utils.js'
    import Boilerplate from './Boilerplate.svelte'
    import LejaLoading from '../LejaLoading.svelte'
    async function getData() {
        let data = EMPTY_BLOG
        try {
            const res = await fetch('../data/blog-data.json');
            const text = await res.text()
            if (res.ok) {
                console.log('res ok')
                data = JSON.parse(text)
                data.singleText = false
            } else {
                console.log('res erro')
                data = loadError(500)
            }
        } catch (e) {
            console.log(e)
            throw new Error(`Falha ${e}`)
        }
        await console.log(JSON.stringify(data))
        return data
    }
    let blogData = getData()
</script>
{#await blogData}
		<LejaLoading/>
{:then retorno}
    <Boilerplate {retorno}/>
{:catch error}
	<p class="sos">{error.message}</p>
{/await}	