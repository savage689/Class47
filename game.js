class Game{
    constructor(){
        
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        coin1=createSprite(350,330,10,10);
        coin1.addImage(blackcoin);
        coin2=createSprite(347,315,10,10);
        coin2.addImage(browncoin);
        coin3=createSprite(343,300,10,10);
        coin3.addImage(blackcoin);
        coin4=createSprite(342,290,10,10);
        coin4.addImage(browncoin);
        coin5=createSprite(348,270,10,10);
        coin5.addImage(blackcoin);
        hole1=createSprite(50,70,30,30);

        striker = createSprite(350,140,20,20);
        striker.addImage(carromstriker);
        striker.scale=0.1;
        
    }

    getState(){
        var gameStateref=database.ref("gameState");
        gameStateref.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("black");
            image(carromboard,0,0,700,700);
        }

        drawSprites();        
        

    }
    
}
