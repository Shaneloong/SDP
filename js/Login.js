function Check_Nric(){
    let x = document.getElementById("NRIC").value;
    if (x.length < 10 || x.length > 12){
        document.getElementById("NRIC").className = "form-control is-invalid"
        document.getElementById("login-button").className = "btn btn-primary disabled";
    }else{
        document.getElementById("NRIC").className = "form-control is-valid"
        document.getElementById("login-button").className = "btn btn-primary";
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