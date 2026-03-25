// REGISTER
function registerUser(event){
event.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;
const message=document.getElementById("message");

if(password!==confirmPassword){
message.style.color="red";
message.innerText="Passwords do not match";
return;
}

const user={name,email,password};
localStorage.setItem("cittaUser",JSON.stringify(user));

message.style.color="lightgreen";
message.innerText="Registered successfully";

setTimeout(()=>window.location.href="index.html",1200);
}


// LOGIN
function loginUser(event){
event.preventDefault();

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const message=document.getElementById("message");

const user=JSON.parse(localStorage.getItem("cittaUser"));

if(!user){
message.style.color="red";
message.innerText="No account found";
return;
}

if(email===user.email && password===user.password){
localStorage.setItem("loggedInUser",JSON.stringify(user));
window.location.href="home.html";
}else{
message.style.color="red";
message.innerText="Invalid credentials";
}
}


// TOGGLE PASSWORD
function togglePassword(){
const input=document.getElementById("password");
const icon=document.getElementById("eyeIcon");

if(input.type==="password"){
input.type="text";
icon.classList.replace("fa-eye","fa-eye-slash");
}else{
input.type="password";
icon.classList.replace("fa-eye-slash","fa-eye");
}
}


// AUTH CHECK
function checkAuth(){
const user=JSON.parse(localStorage.getItem("loggedInUser"));
if(!user){
window.location.href="login.html";
}
}


// LOGOUT
function logout(){
localStorage.removeItem("loggedInUser");
window.location.href="login.html";
}

function goToPage(){
    window.location.href = "Course.html";
}