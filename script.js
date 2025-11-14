

var btn  = document.querySelector("button")
var box  = document.querySelector("#box")
var small  = document.querySelector("small")
btn.addEventListener("click", function () {
    var c1  =  Math.floor(Math.random()*256)
    var c2  =  Math.floor(Math.random()*256)
    var c3  =  Math.floor(Math.random()*256)
    console.log(c1,c2,c3);
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    small.innerHTML = `rgb(${c1},${c2},${c3})`
    small.style.padding = "10px 20px"
    small.style.backgroundColor = "rgb(55,162,255)"
    small.style.borderRadius = "8px"
    small.style.color = "white"

    
})
