<script>
    import { Button, Jumbotron } from 'sveltestrap';
    export let retorno;
</script>
<header>
	<h1 class="display-3">{retorno.title}</h1>
	<h3 class="lead">{retorno.description}</h3>
	<hr class="my-2" />


</header>