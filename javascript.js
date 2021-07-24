// if we click on the start/reset
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1 sec in loops
            //timeleft
                //yes - continue
                //no-gameover
        //change button to reset
        //generate new q&a

//if we click on answer box
    //if we are playing
        //correct
            //yes
                //increase score
                //show correct box for 1 sec
                //generate new q&a
            //no
                //show try again for 1 sec


// variables-   
var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;
var correctbox;
var incorrect;
var i;

document.getElementById("startreset").onclick=function(){
    if(playing==true){
        location.reload();
        
    }
    else{
        playing=true;
        score=0;
        hide("gameover");
        document.getElementById("scorevalue").innerHTML=score;
        show("timeremaining");
        document.getElementById("startreset").innerHTML="Reset Game";
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        startcountdown();
        generate();
        for(i=1;i<5;i++){
            document.getElementById("box"+i).onclick=function(){
                if(playing==true) {
                    if(this.innerHTML==correctanswer){
                        score++;
                        document.getElementById("scorevalue").innerHTML=score;
                        hide("tryagain");
                        show("correct");
                        setTimeout(function(){
                            hide("correct");
                        }, 1000);
                        generate();
                    }
                    else{
                        hide("correct");
                        show("tryagain");
                        setTimeout(function(){
                            hide("tryagain");
                        }, 1000);
                    }
            
                }
            }
        }
    }
}



//functions - 

function startcountdown(){
    action = setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if(timeremaining==0){
        
            show("gameover");
            hide("timeremaining");
            hide("correct");
            hide("tryagain");
            clearInterval(action);
            playing=false;
            document.getElementById("startreset").innerHTML="Start Game";
            document.getElementById("finalscore").innerHTML=score;
            
        }
    },1000)
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function show(id){
    document.getElementById(id).style.display="block";
}
// generate ques and answ
function generate(){
var x = 1 +Math.round(9*Math.random());
var y = 1 +Math.round(9*Math.random());
correctanswer = x*y;
document.getElementById("int1").innerHTML=x;
document.getElementById("int2").innerHTML=y;
//random box for answer
correctbox=1+Math.round(3*Math.random());
document.getElementById("box"+correctbox).innerHTML=correctanswer;

for(i=1;i<5;i++){
    if(i!=correctbox){
        do{
        incorrect=(1 +Math.round(9*Math.random())) *(1 +Math.round(9*Math.random()));
        document.getElementById("box"+i).innerHTML= incorrect;}
        while(correctanswer==incorrect){
            incorrect=59;
        }
    }
}

}