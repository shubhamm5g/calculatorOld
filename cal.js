let ans=document.querySelector("#ans")
let num1,num2,opr,sol=0
function calc(){
    num1=parseInt(f1.fnumber.value)
    num2=parseInt(f1.snumber.value)
    opr=f1.opration.value
    switch(opr){
        case "add":
            sol=num1+num2
            break;
        case "sub":
            sol=num1-num2
            break;
        case "mul":
            sol=num1*num2
            break;
        case "div":
            sol=num1/num2
            break;
        default:
            alert("Select Oporator")
            break;
    }
    ans.textContent="Calculation of two no:"+ sol
}
