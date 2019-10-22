<script>
    export let lista;
</script>
<style>
    h2.set{
        font-size: 14px;
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
    <div class="row">
        {#each lista as item}
        <div class="col-lg-8 col-md-10 mx-auto">
            <h2 class="set">{item.title}</h2>
            <h3 class="set">{item.start}</h3>
            <span class="author">{item.author} em {item.date}</span>
        </div>
        {/each}
    </div>
</section>