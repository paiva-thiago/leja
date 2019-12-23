<script>
    export let commentSystem
    export let commentSource
    
    (function(prmCommentSystem) {
    if(prmCommentSystem=='DISQUS'){
        var d = document, s = d.createElement('script');
        s.src = commentSource;
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }
    })(commentSystem);
</script>
{#if commentSystem==='DISQUS'}
    <div id="disqus_thread"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{/if}