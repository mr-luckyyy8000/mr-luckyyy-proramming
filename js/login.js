function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="DOREMON"&& password=="JERRY"){
        // alert("login Successfully!!");
        window.open("index-educational.html");
        return false;
    }
    if(username=="joker"&& password=="jaimahakal"){
        // alert("login Successfully!!");
        window.open("html1.html");
        return false;
    }
    else{
        alert("Login failed");
    }
}
