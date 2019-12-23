<script>
	import { Button, Jumbotron } from 'sveltestrap';
	import {rootz} from '../../Utils.js'
	import PageMenu from './PageMenu.svelte'
    export let retorno;
</script>
<header>
	<PageMenu pages={retorno.pages}/>
	{#if retorno.headerImg===''}
		<h1 class="display-3">{retorno.title}</h1>
		<h3 class="lead">{retorno.description}</h3>	
	{:else}
		<img src={rootz.concat("/data/img/".concat(retorno.headerImg))} alt="Blog Logo">
	{/if}
	<hr class="my-2" />
</header>