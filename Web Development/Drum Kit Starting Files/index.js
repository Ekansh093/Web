

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    // console.log(this.innerHTML);

    var drum = this.innerHTML;
    if(drum == "w"){
      playDrum('crash');
    }else if(drum == "a"){
      playDrum('kick-bass');
    }else if(drum == "s"){
      playDrum('snare');
    }else if(drum == "d"){
      playDrum('tom-1');
    }else if(drum == "j"){
      playDrum('tom-2');
    }else if(drum == "k"){
      playDrum('tom-3');
    }else if(drum == "l"){
      playDrum('tom-4');
    }else{
      playDrum('crash');
    }


  });
}


function playDrum(drumName){
  var audio = new Audio("sounds/"+ drumName + ".mp3");
  audio.play();
}

document.addEventListener("keypress", function(event){
  console.log(event.key);
});
