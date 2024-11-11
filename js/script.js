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
        document.getElementById("nightmodebutton").innerHTML = "Light Mode!";
        document.getElementById("nightmain").style.backgroundColor = "var(--darkmain)";
        document.getElementById("nightmodebutton").style.fontSize = "16px";
        document.getElementById("nightmodebutton").style.fontWeight = "700";
        document.getElementById("nightmodebutton").style.position = "absolute";
        document.getElementById("nightmodebutton").style.top = "10px"; 
        document.getElementById("nightmodebutton").style.right = "10px"; 
        toggle = true;
    }

    if(toggle == false){ 
        if(NIGHTSTATE == true){
            setState(false)
            for (var i = 0; i < nightmode_elements.length; i++){
                nightmode_elements[i].style.color = "black";
            }
            for (var i = 0; i < nightmode_elements_white.length; i++){
                nightmode_elements_white[i].style.color = "#1b4f6f";
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
            document.getElementById("nightmodebutton").innerHTML = "Night Mode!"
            document.getElementById("nightmain").style.backgroundColor = "white";
            document.getElementById("nightmodebutton").style.fontSize = "16px";
            document.getElementById("nightmodebutton").style.fontWeight = "700";
            document.getElementById("nightmodebutton").style.position = "absolute";
            document.getElementById("nightmodebutton").style.top = "10px"; 
            document.getElementById("nightmodebutton").style.right = "10px"; 
        }
   }
   toggle = false;
}


// Select elements for adding hover effects
const hoverElements = document.querySelectorAll('.hover-button, .nightmode-card');

// mouseover and mouseout listeners
hoverElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        // Change styles on hover
        element.style.transform = 'scale(1.1)';
        element.style.backgroundColor = '';
    });

    element.addEventListener('mouseout', () => {
        // Reset styles when hover ends
        element.style.transform = 'scale(1)';
        element.style.backgroundColor = '#1b4f6f'; // Reverts to original
    });
});

const title = document.getElementById('title');
title.style.transform = 'translateX(-100vw)';
title.style.transition = 'transform 1s ease';
window.onload = () => {
  title.style.transform = 'translateX(0)';
};

