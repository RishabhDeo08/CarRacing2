var gameState=0,playerCount,player,game,form,database,allPlayers,distance=6

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game()
    game.gateState()
    game.start()
}

function draw(){
if (playerCount==4){
    game.update(1)

}  
if (gameState==1){
    game.play()
}
}

