<script>
	import { Router, Route } from 'yrv';
	import Init from './components/Init.svelte'
	export let url = "";	
</script>
<body>
<Router>  
  <Route exact ><Init root={true}/></Route>    
  <Route path="/pages/:title" component={Init}/>
  <Route path="/posts/:date-:title" component={Init}/>
  <Route fallback><Init errorCode={404} root={false}/></Route>
</Router>	
</body>