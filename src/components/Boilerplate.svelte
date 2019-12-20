<script>    
    import BlogHeader 		from '../BlogHeader.svelte'
	import Blog            from '../Blog.svelte'
	import BlogFooter 		from '../BlogFooter.svelte'  
    export let retorno = {}
</script>

<BlogHeader retorno={retorno}/>
<Blog valor={retorno}/>		
<BlogFooter retorno={retorno}/>
