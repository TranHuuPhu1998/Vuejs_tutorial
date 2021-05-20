new Vue({
  el: '#app',
  data: {
    playerHealth : 100,
    monsterHealth:100,
    gameIsRunning : false,
    turns:[]
  },
  methods: {
    startNewGame : function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    acttack : function(){
      //
      if(this.checkPlayerOptions()){
        return;
      }
      //Monster
      var damage = this.inputDamage(4,10);
      this.monsterHealth -= damage
      this.turns.unshift({
        isplayer : true,
        textLog: 'Player hits Monster for ' + damage
      })
      //Player
      this.monsterAttacks();
    },
    specialAttack: function(){
      if(this.checkPlayerOptions()){
        return;
      }
      //Monster
      var damage = this.inputDamage(10,20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isplayer : true,
        textLog: 'Player hits Monster for ' + damage
      })
      //Player
      this.monsterAttacks();
    },
    heal: function(){
      if(this.playerHealth > 70){
        return false;
      }else if(this.playerHealth <= 60){
        this.playerHealth +=10;
      }else{
        this.playerHealth = 70;
      }
      this.turns.unshift({
        isplayer : true,
        textLog: 'Play heal for 10 '
      })
     
      this.monsterAttacks();
    },
    giveUp : function(){
      this.gameIsRunning = false;
      this.turns = [];
      this.playerHealth = 100;
      this.monsterHealth = 100;
      alert("You lost")
    },
    monsterAttacks :function(){
      var damage = this.inputDamage(4,10)
      this.playerHealth -= damage;
      this.turns.unshift({
        isplayer : false,
        textLog: 'Monster hits Player for ' + damage
      })
      this.checkPlayerOptions()
    },
    inputDamage : function(minDamage ,maxDamage){
      return  Math.max(Math.floor(Math.random() * maxDamage) + 1 , minDamage);
    },
    checkPlayerOptions : function(){
      if(this.monsterHealth <= 0){
        if(confirm('You win ! New game ?')){
          this.startNewGame();
        }else{
          this.gameIsRunning = false;
          return false;
        }
        return ;
      }else if(this.playerHealth <=0 ){
        if(confirm('You lose ! New game ?')){
          this.startNewGame();
        }else{
          this.gameIsRunning = false;
          return false;
        }
        return ;
      }
      return false;
    }
  }
});