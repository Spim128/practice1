let submit = document.getElementById("okbtn");
let username = document.getElementById("username");
let password = document.getElementById("password");
let backbtn = document.getElementById("backbtn");

function login() {
    if(username.value == ""){
        username.value = "訪客";
        console.log(username.value);
        alert("你好，"+username.value+"請登入。");
    }
    else{
        console.log(username.value);
        alert("登入成功!\n"+"你好，"+username.value);
        history.back(-1);
    }
}
function back() {
    history.back(-1);
}
submit.addEventListener("click", login);
backbtn.addEventListener("click", back);

