import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Battle } from './../src/battle.js';
// import { Player } from './../src/player.js';
// import { Character, defaultCharacters, level1Powers, level2Powers } from './../src/character.js';
import './styles.css';


const djordanne = "\u{1f93a}";
const vortex = "\u{1f9de}";


function readInitPositions() {
  var tags = document.getElementById('battle-ground').children;
  console.log("tags: " + tags);

  var childIds = [];
  for (let i = 0; i < tags.length; i++) {
    childIds.push(tags[i].getAttribute("id"));
  }
  return childIds;
}

function placeCharacters(idArray) {
let pos1 = idArray[0];
let pos10 = idArray[(idArray.length - 1)];
var position1 = document.getElementById(pos1);
var position2 = document.getElementById(pos10);
position1.textContent = djordanne;
position2.textContent = vortex;
}



$(document).ready(function(){
  let positions = [];
  positions = readInitPositions();
  placeCharacters(positions);
});
