function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="123"&& password=="jaimahakal"){
        // alert("login Successfully!!");
        window.open("html1.html");
        return false;
    }
    else{
        alert("Login failed");
    }
}