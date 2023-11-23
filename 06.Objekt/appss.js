let cvb=document.querySelector("cvb")
let value1=document.querySelector("value1")
let value2=document.querySelector("value2")
let buttonA=document.querySelector("buttons a")
let buttonB=document.querySelector("buttons b")
let buttonC=document.querySelector("buttons c")
let buttonD=document.querySelector("buttons d")
let buttonE=document.querySelector("buttons e")

cvb.addEventListener("click",function(){
    let result = +value1.value+ value2.value;
    document.getElementById("result").value=result;
});
