<script>
	import { Button, Jumbotron } from 'sveltestrap';
	import PageMenu from './PageMenu.svelte'
    export let retorno;
</script>
<header>
	<PageMenu pages={retorno.pages}/>
	<h1 class="display-3">{retorno.title}</h1>
	<h3 class="lead">{retorno.description}</h3>	
	<hr class="my-2" />
</header>