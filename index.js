
var today=new Date();
var DOB=document.querySelector("#DOB");
var Calculate_age=document.getElementById("calcage");
var display=document.getElementById("dis_age");
var age=document.getElementById("age");
console.log(today);
curdate.innerText=`Today date is ${today.toLocaleDateString('en-US')}`;
calcage.addEventListener("click",()=>{
    var date_birth=new Date(DOB.value);
    var age=today.getFullYear()-date_birth.getFullYear();
    var mon=today.getMonth()-date_birth.getMonth();
    if(mon<0||(mon==0  && today.getDate()<date_birth.getDate())){
        age=age-1;
    }
    display.innerText=`${age} years old`;
    console.log(age);
})
