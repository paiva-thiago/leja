<script>
	 import { Button, Jumbotron } from 'sveltestrap';
	 import Copyleft from './Copyleft.svelte';
	 import ContentLoader from 'svelte-content-loader';
	 //TODO - Load it in a JSON file instead a simple Javascript Object	 
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
		<Jumbotron>
		  <h1 class="display-3">{retorno.title}</h1>
		  <p class="lead">
			{retorno.description}
		  </p>
		  <hr class="my-2" />
		  <p>
			<Copyleft/>{retorno.author} {new Date().getFullYear()}
		  </p>
		  <p class="lead">
			<Button color="primary">Learn More</Button>
		  </p>
		</Jumbotron>
	{:catch error}
		<p class="sos">{error.message}</p>
	{/await}	
</body>