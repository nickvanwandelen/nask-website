var phaserJS;
var startState;

console.log("Loading Scheidingsmethode Phaser Applet");

jQuery.getScript("../../assets/phaser/phaser.js", loadedPhaser);

function runScript(){

}

function loadedPhaser(data, textStatus, jqxhr){
  phaserJS = data;
  jQuery.getScript("../../assets/phaser/applets/scheidingsmethodes/states/start.js", loadedStartState);
}

function loadedStartState(data, textStatus, jqxhr){
  startState = data;
  var game = new Phaser.Game(1000, 1000);
  game.state.add('Start', BasicGame.Start);
  game.state.start('Start');
}
