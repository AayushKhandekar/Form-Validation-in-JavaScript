function validate() {

    var name = document.form.name.value;
    var passwordOne = document.form.passwordOne.value;
    var passwordTwo = document.form.passwordTwo.value;
    var number = document.form.number.value;

    if(name == null || name == "") {

        alert("Enter a name!");
        return false;
    } else if (passwordOne != passwordTwo){

        alert("Passwords do not match!");
        return false;
    } else if (passwordOne == passwordTwo && passwordOne.length<6) {

        alert("Password should be at least 6 characters!")
        return false;
    } else if (isNaN(number)) {

        alert("Enter a number!");
        return false;
    }
}