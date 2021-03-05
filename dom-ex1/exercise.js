
var input = document.getElementById("txt")
var button = document.getElementById("btn")

function create() {
    var p = document.createElement("p");
    p.innerHTML = input.value
    document.body.appendChild(p)
}


button.addEventListener("click", create)
