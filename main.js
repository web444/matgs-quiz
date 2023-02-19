function addUser() {

    inpName1 = document.getElementById("player1").value;
    inpName2 = document.getElementById("player2").value;

    localStorage.setItem("playerName1", inpName1);
    localStorage.setItem("playerName2", inpName2);

    window.location.replace("gamepage.html");

};