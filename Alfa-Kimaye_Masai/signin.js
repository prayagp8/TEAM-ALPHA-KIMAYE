let logOrNot = JSON.parse(localStorage.getItem("loginStatus")) || false;


function showSignUp() {
    let x = document.querySelector("#signInForm");
    x.style = "Display:block";
    let y = document.querySelector("#logInForm");
    y.style = "Display:none";
}
function closeLogINSignUp() {
    let x = document.querySelector("#signInForm");
    x.style = "Display:none";
    let y = document.querySelector("#logInForm");
    y.style = "Display:none";
}
function showLogIn() {
    if (logOrNot) {
        window.location.href="myAccount.html"
    } else {
        let y = document.querySelector("#logInForm");
        y.style = "Display:block";
        let x = document.querySelector("#signInForm");
        x.style = "Display:none";
    }

}

let signInform = document.querySelector("#signInForm>div>form");
signInform.addEventListener("submit", signInFunction);

let sign_Data_Arr = JSON.parse(localStorage.getItem("signInData")) || [];
function checkEmail(){
    let filtered=sign_Data_Arr.filter(function(el){
        return el.email==document.querySelector("#singEmail").value
    })
    if(filtered.length>0 && sign_Data_Arr.length!=0){
        return true
    }else{
        return false
    }
}
function signInFunction() {
    event.preventDefault();
    if(checkEmail()==true){
        alert("Email Already Exist")
    }else {
    let emailLog = document.querySelector("#singEmail").value;
    let passwordLog = document.querySelector("#SignPass").value;
    let nameFirst = document.querySelector("#firstName").value;
    let nameSec = document.querySelector("#lastName").value;
    console.log(passwordLog)
    let obj = {
        email: emailLog,
        password: passwordLog,
        firstName: nameFirst,
        secondName: nameSec
    }
    sign_Data_Arr.push(obj);
    localStorage.setItem("signInData", JSON.stringify(sign_Data_Arr));
}
}


let logInform = document.querySelector("#logInForm>div>form");
logInform.addEventListener("submit", logInFunction);


function logInFunction() {
    event.preventDefault();

    let emailLog = document.querySelector("#emailId").value;
    let passwordLog = document.querySelector("#passLog").value;

    sign_Data_Arr.forEach(function (el, i) {
        if (el.email == emailLog && el.password == passwordLog) {
            logOrNot = true;
            localStorage.setItem("loginStatus",JSON.stringify(logOrNot));
            localStorage.setItem("loggedIdDetails",JSON.stringify(el));
            // window.location.reload();
        }

    })

    if(logOrNot){
        let userDetails = JSON.parse(localStorage.getItem("loggedIdDetails"))
        alert("Login Successful\n" + "Welcome " + userDetails.firstName)
        
        window.location.reload();
    }else{
        alert("login Failed")
    }
}
