<script>    
    import BlogHeader 		from './lejacomponents/BlogHeader.svelte'
	import Blog            from './lejacomponents/Blog.svelte'
	import BlogFooter 		from './lejacomponents/BlogFooter.svelte'  
    export let retorno = {}
</script>

<BlogHeader retorno={retorno}/>
<Blog valor={retorno}/>		
<BlogFooter retorno={retorno}/>