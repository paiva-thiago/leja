<script>
	 import ContentLoader 	from 'svelte-content-loader'
	 import BlogHeader 		from './BlogHeader.svelte'
	 import Blog            from './Blog.svelte'
	 import BlogFooter 		from './BlogFooter.svelte'
	 import dataRouted     from './LejaRouting.js'
	 
	 async function getData(){
		let data={}
		try{
			data =  await dataRouted()
			console.log('testing...')
		}catch(e){
			throw new Error('Falha')
		}
		return data
	 }	 
	 let blogData = getData()
	 
</script>
<body>
	{#await blogData}
		<ContentLoader>
		  <rect x="0" y="80" rx="3" ry="3" width="350" height="6" /> 
		  <rect x="0" y="100" rx="3" ry="3" width="380" height="6" /> 
		  <rect x="0" y="120" rx="3" ry="3" width="201" height="6" /> 
		  <rect x="6" y="7" rx="0" ry="0" width="321" height="59" />
		</ContentLoader>
	{:then retorno}
		<BlogHeader retorno={retorno}/>
		<Blog valor={retorno}/>		
		<BlogFooter retorno={retorno}/>
	{:catch error}
		<p class="sos">{error.message}</p>
	{/await}	
</body>