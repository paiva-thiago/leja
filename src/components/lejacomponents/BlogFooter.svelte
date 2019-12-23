<script>
    import Copyleft from './Copyleft.svelte';

    export let retorno;
</script>
<footer>
    <hr>
    <Copyleft/>{retorno.author} {new Date().getFullYear()}
</footer>