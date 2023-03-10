let p1 = 8
let p2 = 2
document.getElementById("para1").textContent = p1
document.getElementById("para2").textContent = p2

function Add(){
    let val = p1+p2 
    document.getElementById("ans").textContent = "Answer: " + " " + val
}
 
function Subtract(){
    let val = p1-p2 
    document.getElementById("ans").textContent ="Answer: " + " " + val   
}

function Multiply(){
    let val = p1*p2 
    document.getElementById("ans").textContent = "Answer: " + " " + val   
}

function Divide(){
    let val = p1/p2 
    document.getElementById("ans").textContent = "Answer: " + " " + val   
}