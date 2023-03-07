var red = 0;
var blue = 0;
var green = 0;
var audio=document.querySelector("audio");

document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
document.getElementById ("key_display").innerHTML = key;
 var new_element = document.createElement("h1")

new_element.classList.add("xl-type");
document.body.appendChild(new_element)
  if (key == "y") {
    document.body.style.backgroundColor = "pink";
	audio.src="Sound/Retro_Game_Activate_1.wav";
	audio.play();
	audio.muted=false;

  } else if (key == "a") {
    document.body.style.backgroundColor = "orange";
	audio.src="Sound/Retro_Game_Activate_3.wav";
	audio.play();
	audio.muted=false;
  } else if (key == "b") {
    document.body.style.backgroundColor = "#ec008c";
	audio.src="Sound/Retro_Game_Alert.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "c") {
    document.body.style.backgroundColor = "yellow";
	audio.src="Sound/Retro_Game_Alert_2.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "d") {
    document.body.style.backgroundColor = "brown";
	audio.src="Sound/Retro_Game_Alert_3.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "e") {
    document.body.style.backgroundColor = "#eeaa92";
	audio.src="Sound/Retro_Game_Alert_4.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "f") {
    document.body.style.backgroundColor = "black";
	audio.src="Sound/Retro_Game_Classic_Fall_7.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "g") {
    document.body.style.backgroundColor = "blue";
	audio.src="Sound/Retro_Game_Classic_Jump_2.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "h") {
    document.body.style.backgroundColor = "red";
	audio.src="Sound/Retro_Game_Classic_Jump_4.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "i") {
    document.body.style.backgroundColor = "green";
	audio.src="Sound/Retro_Game_Classic_Jump_9.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "j") {
    document.body.style.backgroundColor = "#00aeef";
	audio.src="Sound/Retro_Game_Classic_Jump_11.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "k") {
    document.body.style.backgroundColor = "#fbae42";
	audio.src="Sound/Retro_Game_Classic_Jump_15.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "v") {
    document.body.style.backgroundColor = "violet";
	audio.src="Sound/Retro_Game_Classic_Jump_16.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "l") {
    document.body.style.backgroundColor = "cyan";
	audio.src="Sound/Retro_Game_Classic_Player_Death_9.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "m") {
    document.body.style.backgroundColor = "#8f6d5d";
	audio.src="Sound/Retro_Game_Counter_Ping_1.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "n") {
    document.body.style.backgroundColor = "#705c93";
	audio.src="Sound/Retro_Game_Enemy_Ion_Cannon_1.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "o") {
    document.body.style.backgroundColor = "#00b7f1";
	audio.src="Sound/Retro_Game_Enemy_Killed_3.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "p") {
    document.body.style.backgroundColor = "#f27581";
	audio.src="Sound/Retro_Game_Enemy_Killed_15.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "q") {
    document.body.style.backgroundColor = "#ebe70e";
	audio.src="Sound/Retro_Game_Enemy_Laser_2.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "r") {
    document.body.style.backgroundColor = "#f27178";
	audio.src="Sound/Retro_Game_Enemy_Laser_3.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "s") {
    document.body.style.backgroundColor = "silver";
	audio.src="Sound/Retro_Game_Enemy_Shot_6.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "u") {
    document.body.style.backgroundColor = "green";
	audio.src="Sound/Retro_Game_Enemy_Spawn_6.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "t") {
    document.body.style.backgroundColor = "grape";
	audio.src="Sound/Retro_Game_Hit_Block_1.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "w") {
    document.body.style.backgroundColor = "indigo";
	audio.src="Sound/Retro_Game_Hit_Block_4.wav";
	audio.play();
	audio.muted=false;
  }else if (key == "x") {
    document.body.style.backgroundColor = "#52266f";
	audio.src="Sound/Retro_Game_Low_Health_Loop_2.wav";
	audio.play();
	audio.muted=false;
  }
  else if (key == "z") {
    document.body.style.backgroundColor = "#bfd857";
  	audio.src="Sound/Retro_Game_Take_Damage_Chirp_8.wav";
  	audio.play();
  	audio.muted=false;
  }


  else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
	  audio.src="";
	audio.pause();
	audio.muted=true;
  }
};
