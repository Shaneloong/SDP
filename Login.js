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
        alert("The New password and retype password is not compatible!");
        return false;
    }
}
function CurrentWithNew(){
    let cur = document.getElementById("Current").value;
    let New = document.getElementById("Password").value;
    let Re = document.getElementById("Password2").value;
    if (cur != New){
        if (New == Re){
            return true;
        }else {
            alert("The New Password and Retype Password is not Compatible!!")
            return false;
        }
    }else if (cur == New) {
        alert("Current Password Cannot Same With New Password!!")
        return false;
    }
}