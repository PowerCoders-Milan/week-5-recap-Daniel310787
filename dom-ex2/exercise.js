//If the password is correct then add the class green to the text and remove the class transparent in order to show it.
//Prompt the user to provide a password.

var text = prompt("Can you provide me your password?")
var p = document.getElementById("p");

if(text == "daniel") {
    function checkP() {
        p.removeAttribute("class");
        p.setAttribute("class", "green");
   }
}       

window.addEventListener("load",checkP)
