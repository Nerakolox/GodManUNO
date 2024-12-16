<template>
    <div class="forms">
        <button class="btn btn_default">取消</button>
        <button class="btn btn_primary" :disabled="true">出牌</button>
    </div>
    <div class="cards">
        <div 
            v-for="item in cards" :key="item.id"
            class="card" 
            @mouseenter="chosenCard = item.id" 
            @mouseleave="chosenCard = (selectedCard === item.id ? selectedCard : '')"
            @click="handleCard(item)"
            :class="{'chosen':chosenCard.indexOf(item.id)!=-1||selectedCard.indexOf(item.id)!=-1}"
            :style="{'z-index':chosenCard.indexOf(item.id)!=-1?100+(999-item.id):1}"
            >
            <img class="card-img" src="../assets/cards/images/action_draw_red.png">
        </div>
    </div>
</template>
  
<script>
import '@/assets/css/forms.css'
export default{
    components:{
        
    },
    data(){
        return{
            cards:[
                { id: "1", type: "num", effect: "", score: "9", color: "blue", add: "" },
                { id: "2", type: "action", effect: "skip", score: "20", color: "green", add: "" },
                { id: "3", type: "action", effect: "reverse", score: "20", color: "yellow", add: "" },
                { id: "4", type: "action", effect: "draw", score: "20", color: "red", add: "2" },
                { id: "5", type: "wild", effect: "wild", score: "50", color: "", add: "" },
                { id: "6", type: "wild", effect: "wild", score: "50", color: "", add: "" },
            ],
            chosenCard:'',
            selectedCard:'',
        }
    },
    mounted(){
        
    },
    methods:{
        handleCard(item) {
            this.selectedCard = this.selectedCard === item.id ? '' : item.id
            this.chosenCard = ''
        }
    }
}
</script>
  
<style scoped>
.forms{
    text-align: center;
    margin-bottom: 40px;
    padding-left: 300px;
}

.cards{
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 0;
    user-select: none;
}

.card{
    z-index: 1;
    height: 100px;
    border-radius: 8px;
    position: relative;
    box-shadow: 2px 2px 5px #434343c8;
    margin: 3px;
    -webkit-user-drag: none;
    transition: 0.2s;
    &:hover{
        cursor: pointer;
    }
}

.card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2.1px solid #fff;
    border-radius: 8px; /* 要和父元素一致 */
    pointer-events: none; /* 确保不影响交互 */
}

.card-img{
    height: 100px;
    -webkit-user-drag: none;
}

.chosen{
    transform: translateY(-10px) scale(1.2);
    box-shadow: 2px 2px 5px 5px #434343c8;
    z-index: 999;
}
</style>