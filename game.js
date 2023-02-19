player1aName = localStorage.getItem("playerName1");
player2aName = localStorage.getItem("playerName2");

questionTurn = player1aName;
answerTurn = player2aName;
function finish(){
document.getElementById("qName").innerHTML = questionTurn;
document.getElementById("aName").innerHTML = answerTurn;

}


function send() {

    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    correctAnswer = parseInt(number1) * parseInt(number2);
    $("body").html($("body").html().replace('<!--', ''));
    $("body").html($("body").html().replace('-->', ''));
    document.getElementById("question").innerHTML = number1 + " * " + number2;

}

var player1score=0;
var player2score=0;

function check(){


getAnswer=document.getElementById("ansIn").value;

if(getAnswer == correctAnswer){



 if(answerTurn==player1aName){

player1scoreUpdated=player1score+1;
document.getElementById("score1").innerHTML="Score of "+player1aName+" is "+ player1scoreUpdated;

 }

 else{

player2scoreUpdated=player2score+1;
document.getElementById("score2").innerHTML="Score of "+player2aName+" is "+ player2scoreUpdated;
    

 }

}

if(questionTurn== player2aName){

questionTurn=player1aName;
document.getElementById("qName").innerHTML=player1aName;
document.getElementById("aName").innerHTML=player2aName;
}
else{

    questionTurn=player2aName;
    document.getElementById("qName").innerHTML=player2aName;
    document.getElementById("aName").innerHTML=player1aName;

}

}

