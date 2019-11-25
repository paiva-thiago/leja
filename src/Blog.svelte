<script>
    import PostList from './PostList.svelte'
    import Text from './Text.svelte'
    export let valor    
</script>
{#if !valor.singleText}
    <PostList lista={valor.posts}/>
{:else}
    <Text title={valor.titleText} value={valor.text} commentSource={valor.commentSource}/>
{/if}