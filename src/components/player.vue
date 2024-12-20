<template>
    <div>
        <div style="display: flex;flex-direction: row;">
            <img class="player-head" src="@/assets/head.gif" />
            <div class="player-info">
                <div>username</div>
                <div style="display: flex;flex-direction: row;align-items: end;">
                    <img style="width: 40px;" src="@/assets/cards/hand-card.png" />
                    <div>*99</div>
                </div>
            </div>
        </div>
        <div style="display: flex;align-items: center;font-size: 20px;justify-content: center;margin-top: 5px;">
            8s
        </div>
    </div>
</template>

<script>
export default{
    components:{
        
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
.player-head{
    border-radius: 6px;
    width: 56px;
    height: 56px;
    box-shadow: 2px 2px 5px #434343c8;
}
.player-info{
    margin-left: 10px;

}
</style>