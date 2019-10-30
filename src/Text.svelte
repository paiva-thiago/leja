<script>    
    import { Remarkable } from 'remarkable';
    export let title
    export let value

    let md = new Remarkable();
</script>
<main>
     <h1>{title}</h1>
     {@html md.render(value)}
</main>