const voice = {
    "效果":[
        "发牌","摸牌","按钮","选牌","未uno锤人"
    ],
    "语音":[
        "案例：快点啊我等的花都谢了；"
    ],
    "出牌语音":[
        "skip","reverse","Draw 2、4、cards","turn red,blue,yellow,green"
    ]
}

const card = {
    num:[
        {
            "type":"num",
            "effect":"",
            "score":"9",
            "color":"blue",
            "add":""
        }
    ],
    action:[
        {
            "type":"action",
            "effect":"skip",
            "score":"20",
            "color":"blue",
            "add":""
        },
        {
            "type":"reverse",
            "effect":"reverse",
            "score":"20",
            "color":"yellow",
            "add":""
        },
        {
            "type":"draw",
            "effect":"draw",
            "score":"20",
            "color":"green",
            "add":"2"
        }
    ],
    wild:[
        {
            "type":"wild",
            "effect":"wild",
            "score":"50",
            "color":"",
            "add":""
        },
        {
            "type":"wild",
            "effect":"draw",
            "score":"50",
            "color":"",
            "add":"4"
        }
    ]
}

function getNextPlayableCardIds(lastCard, hand) {
    let playableCardIds = []

    // 遍历手牌
    hand.forEach(card => {
        if(lastCard.type==='wild'){
            if(lastCard.effect=="wild"){
                if(card.color==lastCard.color||card.type==='wild'){//假设变成黄牌
                    playableCardIds.push(card)
                }
            }else if(lastCard.effect=="draw"){
                if(card.type==='wild'&&card.effect=="draw"){
                    playableCardIds.push(card)
                }
            }
        }else if(lastCard.type==='num'){
            if(card.color==lastCard.color||card.type==='wild'||(card.type==='num'&&card.score==lastCard.score)){
                playableCardIds.push(card)
            }
        }else if(lastCard.type==='action'){
            if(lastCard.effect=='skip'||lastCard.effect=='reverse'){
                if(card.color==lastCard.color||card.type==='wild'||(card.type==='action'&&card.effect==lastCard.effect)){
                    playableCardIds.push(card)
                }
            }else if(lastCard.effect=='draw'){
                if((card.type==='wild'&&card.effect===lastCard.effect)||(card.type==='action'&&card.effect==lastCard.effect)){
                    playableCardIds.push(card)
                }
            }
        }
    })

    return playableCardIds
}

// 示例数据，假设每张卡都有一个唯一的 id
const lastCard = { id: "lc1", type: "wild", effect: "draw", score: "50", color: "", add: "4" };
const hand = [
    { id: "c1", type: "num", effect: "", score: "9", color: "blue", add: "" },
    { id: "c2", type: "action", effect: "skip", score: "20", color: "green", add: "" },
    { id: "c3", type: "action", effect: "reverse", score: "20", color: "yellow", add: "" },
    { id: "c4", type: "action", effect: "draw", score: "20", color: "red", add: "2" },
    { id: "c5", type: "wild", effect: "wild", score: "50", color: "", add: "" },
    { id: "c6", type: "wild", effect: "wild", score: "50", color: "", add: "" },
];

// 调用函数测试
console.log(getNextPlayableCardIds(lastCard, hand));
