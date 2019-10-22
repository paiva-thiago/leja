<script>
	 import ContentLoader 	from 'svelte-content-loader';
	 import BlogHeader 		from './BlogHeader.svelte';
	 import PostList   		from './PostList.svelte';
	 import BlogFooter 		from './BlogFooter.svelte';

	 async function getData(){
		const res = await fetch('./data/blog-data.json');
		const text = await res.text()		
		console.log('texto = '+text);
		let ret={}
		if (res.ok) {
			ret= JSON.parse(text)
		} else {			
			throw new Error(text)
			return ret
		}		
		console.log(ret);
		return ret;
	 }
	 let blogData = getData();
	 
</script>
<body>
	{#await blogData}
		<ContentLoader>
		  <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
		  <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
		  <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
		  <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
		  <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
		  <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
		</ContentLoader>
	{:then retorno}
		<BlogHeader retorno={retorno}/>
		<PostList lista={retorno.posts}/>
		<BlogFooter retorno={retorno}/>
	{:catch error}
		<p class="sos">{error.message}</p>
	{/await}	
</body>