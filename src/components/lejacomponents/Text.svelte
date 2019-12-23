<script>    
    import BlogDisqus from  './BlogDisqus.svelte'
    import { Remarkable } from 'remarkable'
    export let commentSystem
    export let commentSource
    export let title
    export let value
    export let commentsInThisText
    let md = new Remarkable();
</script>
<main>
     {@html md.render(value)}
     {#if commentsInThisText && commentSource!=''}        
        <script id="dsq-count-scr" src="//leja.disqus.com/count.js" async></script>
        <BlogDisqus {commentSystem} {commentSource} />
     {/if}
</main>