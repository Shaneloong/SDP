function Check_accountID() {
    let x = document.getElementById("AccountID").value
    if (x.substring(0,2) == "TP" || x.substring(0,2)== "tp") {
        document.getElementById("login-button").className = "btn btn-primary";
    }else {
        document.getElementById("login-button").className = "btn btn-primary disabled";
    }
}