<script>
    export let valor;
    const textDate = ()=>{
        let ymd = new String(valor)
        return `em ${ymd.substr(6,2)}/${ymd.substr(4,2)}/${ymd.substr(0,4)}` 
    }    
</script>
<span>{textDate()}</span>