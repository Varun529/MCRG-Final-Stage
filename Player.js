class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  deletePlayers(){
    var playerDeleteRef=database.ref('/');
    playerDeleteRef.child("players").remove();

  }

  getCarsAtEnd(){
    database.ref('carsRank').on("value",(data)=>{
      this.rank=data.val();
    })
  }

  static updateCarsRank(rank){
    database.ref('/').update({
      carsRank:rank
    })

  }

}

  