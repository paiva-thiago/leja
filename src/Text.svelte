<script>    
    import BlogDisqus from  './BlogDisqus.svelte'
    import { Remarkable } from 'remarkable'
    export let commentSource
    export let title
    export let value

    let md = new Remarkable();
</script>
<main>
     {@html md.render(value)}
     <BlogDisqus {commentSource}/>
</main>