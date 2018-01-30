BasicGame = {};

BasicGame.Start = function(game){};

BasicGame.Start.prototype = {
  preload: function(){

    console.log("Setting game variables...");
    this.input.maxPointers = 1;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.stage.disableVisibilityChange = true;

    console.log("Loading images...");
    this.load.image("background", "../../assets/img/general/natuurkunde_home.jpg");


  },

  create: function(){
    this.game.add.sprite(0, 0, 'background');
  }
};
