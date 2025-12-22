
const audio = document.getElementById("audio");
const myRange = document.getElementById("myRange");

function getData() {
    var x = document.getElementById("myRange").value;
     document.getElementById("sr").innerHTML = x;
     audio.playbackRate = x;
    }




