<script>    
    /**TODO
     * Implement a markdown render/search a way to import markdown-it
     */
    let md = {render:(v)=>v}
    export let title
    export let value
</script>
<main>
     <h1>{title}</h1>
     {md.render(value)}
</main>