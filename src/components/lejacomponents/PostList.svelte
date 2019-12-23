<script>
    import Data from './Data.svelte'
    export let lista
    const toMdFile = (item)=>{
        let title = item.title.replace(/\ /g,'_')
        return `/posts/${item.date}-${title}`
    }
</script>
<style>
    h2.set{
        font-size: 16px;
        font-weight: bold;
    }
    h3.set{
        font-size: 12px;
    }
    .author{
        font-size:11px;
    }
</style>
<section class="container">
    
    {#each lista as item}
    <div class="row">
        <div class="col-lg-8 col-md-10 ml-auto">
            <h2 class="set"><a href={toMdFile(item)}>{item.title}</a></h2>
            <h3 class="set">{item.start}</h3>
            <span class="author">{item.author} <Data valor={item.date}/></span>
        </div>
    </div>
    {:else}
    <div class="row">
         <div class="col-lg-8 col-md-10 ml-auto">
            <h2 class="set">No Posts Here!</h2>
            <h3 class="set">Check your configuration files!</h3>
        </div>
    </div>
    {/each}
    
</section>