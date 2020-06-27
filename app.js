function getNub(num){
var myinp=document.getElementById('myinp');
myinp.value +=num;
}
function clearResult(){
    var myinp=document.getElementById('myinp');
    myinp.value ="";
    
}
function getResult(){
    var myinp=document.getElementById('myinp');
    myinp.value = eval(myinp.value);
}