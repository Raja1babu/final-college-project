function validation(){
    var Firstname = document.getElementById("Firstname").value;
    var Lastname = document.getElementById("Lastname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confpassword = document.getElementById("confpassword").value;
    // First name 
    if (Firstname == ""){
        document.getElementById('F_name').innerHTML = "* First Name can't be blank";
        return false;
    }
    
    if (Firstname.length < 5){
        document.getElementById('F_name').innerHTML = "* First Name Lenght should be greater than 5";
        return false;
    }
    if (!isNaN(Firstname)){
        document.getElementById('F_name').innerHTML = "* First Name should be character only";
        return false;
    }

    //Last Name

    if (Lastname == ""){
        document.getElementById('L_name').innerHTML = "* Last Name can't be blank";
        return false;
    }
    
    if (Lastname.length < 2){
        document.getElementById('L_name').innerHTML = "* Last Name Lenght should be greater than 2";
        return false;
    }
    
    if (!isNaN(Lastname)){
        document.getElementById('L_name').innerHTML = "* Last Name should be character only";
        return false;
    }
    // Username
    
    if (username == ""){
        document.getElementById("u_username").innerHTML = "* Username can't be blank";
        return false;
    } 
    // Email Validation
    if(email.indexOf('@') <=0){
        document.getElementById("u_email").innerHTML = "* Email must contain @";
        return false;
    }
    if((email.charAt(email.length - 4)!= '.') && (email.charAt(email.length - 3)!= '.')){
        document.getElementById("u_email").innerHTML = "* Email must contain .";
        return false;
    }
     //Password
    if(password ==""){
        document.getElementById("u_password").innerHTML ="* Password can't be blank";
        return false;
    }
    if(password.length <= 6){
        document.getElementById("u_password").innerHTML="* Weak Password make it Strong"
        return false;
            }
    
    //Confirm Password
    if(confpassword ==""){
        document.getElementById("c_password").innerHTML ="* Password can't be blank";
            return false;
    }
    if(confpassword.length <= 6){
        document.getElementById("c_password").innerHTML="* Weak Password make it Strong"
            return false;
    }
    if(confpassword != password){
        document.getElementById("c_password").innerHTML="* Password does not match"
            return false;
    }
}
