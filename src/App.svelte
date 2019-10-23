<script>
	 import ContentLoader 	from 'svelte-content-loader'
	 import BlogHeader 		from './BlogHeader.svelte'
	 import Blog            from './Blog.svelte'
	 import BlogFooter 		from './BlogFooter.svelte'
	 

	 async function getData(){
		let ret={}
		const existReq = location.href.indexOf('?')>0;		
		const res = await fetch('./data/blog-data.json');
		const text = await res.text()	
		const getTitle = (cont)=>(cont.split('/')[0]==='pages'?cont.split('/')[1].replace(/_/g,' '):cont.split('-')[1].replace(/_/g,' '))	
		console.log('texto = '+text);		
		if (res.ok) {
			ret= JSON.parse(text)
			if(existReq){
				ret.posts=[]
				ret.singleText=true;
				const content = location.href.split('?')[1]
				const resCont = await fetch(`./data/${content}.md`);
				const txtCont = await resCont.text();
				if(resCont.ok){
					ret.titleText = getTitle(content)
					ret.text = txtCont;
				}else{
					throw new Error(text)
					return ret
				}
			}
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
		<Blog valor={retorno}/>		
		<BlogFooter retorno={retorno}/>
	{:catch error}
		<p class="sos">{error.message}</p>
	{/await}	
</body>