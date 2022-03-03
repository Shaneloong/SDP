function Check_Nric(){
    let x = document.getElementById("NRIC").value;
    if (x.length == 12 || x.length == 11){
        document.getElementById("login-button").className = "btn btn-primary";
    }else{
        document.getElementById("login-button").className = "btn btn-primary disabled";
    }
}
function Check_Password() {
    let ps = document.getElementById("Password").value;
    let reps = document.getElementById("Password2").value;
    if (ps == reps){
        return true;
    }else {
        alert("The password is not compatible!");
        return false;
    }
}
