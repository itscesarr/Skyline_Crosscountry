let NIGHTSTATE = false; 
let toggle = false;

const nightmode_elements = document.getElementById("nightmain").querySelectorAll(".nightmode");
const nightmode_elements_white = document.getElementById("nightmain").querySelectorAll(".nightmode-w");
const nightmode_elements_switch = document.getElementById("nightmain").querySelectorAll(".nightmode-s");
const nightmode_elements_div = document.getElementById("nightmain").querySelectorAll(".nightmode-div");
const nightmode_elements_div2 = document.getElementById("nightmain").querySelectorAll(".nightmode-div2");


function nightmode(){
    
    
    function setState(state){
        NIGHTSTATE = state;
        console.log("State: ", NIGHTSTATE);
    }

    if(NIGHTSTATE == false){
        setState(true)
        for (var i = 0; i < nightmode_elements.length; i++){
            nightmode_elements[i].style.color = "var(--brandcolor)";

        }
        for(var i = 0; i < nightmode_elements_white.length; i++){
            nightmode_elements_white[i].style.color = "white";
        }
        for(var i = 0; i < nightmode_elements_switch.length; i++){
            nightmode_elements_switch[i].style.color = "75, 163, 210";
        }
        for(var i = 0; i < nightmode_elements_div.length; i++){
            nightmode_elements_div[i].style.backgroundColor = "var(--darksecondary)";
            nightmode_elements_div[i].style.boxShadow = "none";
        }
        for(var i = 0; i < nightmode_elements_div2.length; i++){
            nightmode_elements_div2[i].style.backgroundColor = "var(--darktertiary)";
            nightmode_elements_div2[i].style.border = "none";
        }
        document.getElementById("nightmodebutton").innerHTML = "Good Morning!";
        document.getElementById("nightmain").style.backgroundColor = "var(--darkmain)";
        toggle = true;
    }

    if(toggle == false){ 
        if(NIGHTSTATE == true){
            setState(false)
            for (var i = 0; i < nightmode_elements.length; i++){
                nightmode_elements[i].style.color = "black";
            }
            for (var i = 0; i < nightmode_elements_white.length; i++){
                nightmode_elements_white[i].style.color = "black";
            }
            for(var i = 0; i < nightmode_elements_switch.length; i++){
                nightmode_elements_switch[i].style.color = "var(--brandcolor)";
            }
            for(var i = 0; i < nightmode_elements_div.length; i++){
                nightmode_elements_div[i].style.backgroundColor = "white";
                nightmode_elements_div[i].style.boxShadow = "grey 4px 3px 10px";
            }
            for(var i = 0; i < nightmode_elements_div2.length; i++){
                nightmode_elements_div2[i].style.backgroundColor = "var(--lightgrey)";
            }
            document.getElementById("nightmodebutton").innerHTML = "Good Night!"
            document.getElementById("nightmain").style.backgroundColor = "white";
        }
   }
   toggle = false;
}