<template>
    <div class="tabel">
        <div class="user-interface">
            <div class="player-box">
                <Player style="margin: 5px;margin-bottom: 10px;" v-for="n in 10"></Player>
            </div>
        </div>
        <Cards class="cards"></Cards>
    </div>
</template>

<script>
import Cards from '@/components/cards.vue';
import Player from './player.vue';
export default{
    components:{
        Cards,
        Player
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
.player-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 50px;
}
.cards{
    position: absolute;
    left: 0;
    bottom: 100px;
    width: 100vw;
}
</style>