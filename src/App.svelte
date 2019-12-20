<script>
	import { Router, Route } from 'svero';
	import Root from './components/Root.svelte'
	import SinglePage from './components/SinglePage.svelte'
	export let url = "";
	/** Rota
	async function _getData(){
		let data=EMPTY_BLOG
		try{
			let router =  Navaid()
			
			.on('/pages/:title',async (p)=>{
				console.log('going to pages!')
				data = await loadOne('pages',p.title)
			})
			.on('/posts/:date-:title',async (p)=>{
				console.log('going to posts!')
				data = await loadOneWithDate('pages',p.date,p.title)
			})
			router.listen()
		}catch(e){
			console.log(e)
			throw new Error(`Falha ${e}`)
		}
		await console.log(JSON.stringify(data))
		return data
	 }	 
	*/
</script>
<body>
<Router url="{url}">  
  <Route path="/pages/:title" component={SinglePage} />  
  <Route path="" component={Root} />  
</Router>	
</body>