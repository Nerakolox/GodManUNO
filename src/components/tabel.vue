<template>
    <div class="tabel">
        <div class="user-interface">
            123
        </div>
        <Cards class="cards"></Cards>
    </div>
</template>

<script>
import Cards from '@/components/cards.vue';
export default{
    components:{
        Cards
    },
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{

    }
}
</script>

<style scoped>
.tabel{
    position: relative;
    height: 100vh;
}
.user-interface{
    height: 70vh;
}
.cards{
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100vw;
}
</style>