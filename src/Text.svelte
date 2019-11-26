<script>    
    import BlogDisqus from  './BlogDisqus.svelte'
    import { Remarkable } from 'remarkable'
    export let commentSystem
    export let commentSource
    export let title
    export let value

    let md = new Remarkable();
</script>
<main>
     {@html md.render(value)}
     {#if commentSource!=''}        
        <BlogDisqus {commentSystem} {commentSource} />
     {/if}
</main>