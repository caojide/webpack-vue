<template>
    <div id="app">
        {{msg}}
    </div>
</template>
<script>
    export  default  {
        data(){
            return {
                msg: 'this is app.vue'
            }
        }
    }
</script>
<style scoped>
    #app {
        width: 100%;
        height: 100%;
        padding-top: 200px;
        text-align: center;
        font-size: 24px;
        color: #f33;
    }
</style>