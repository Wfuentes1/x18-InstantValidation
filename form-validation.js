function register(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if (userEntered.length >= 6) {
  document.getElementById("usernameGroup").classList.add("has-success");
  document.getElementById("usernameGroup").classList.remove("has-error");
  } else{
      document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userEntered){
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  var str = ("passwordGroup")
  var pos = str.search("passEntered");
  if (passEntered=="password"){
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").innerHTML="Bad password.";
  }else{
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
  }
  function validateUsername(){
    } else{
        document.getElementById("usernameGroup").classList.add("has-error");
        if (userEntered.length >= 6) {
        document.getElementById("usernameGroup").classList.add("has-success");
        document.getElementById("usernameGroup").classList.remove("has-error");
        } else{
            document.getElementById("usernameGroup").classList.add("has-error");
        }
        if(userEntered){
          document.getElementById("usernameGroup").classList.add("has-error");
          document.getElementById("usernameGroup").classList.remove("has-success");
        }else{
          document.getElementById("usernameGroup").classList.add("has-success");
        }
    }
  }
  function validatePassword(){
    var str = ("passwordGroup")
    var pos = str.search("passEntered");
    if (passEntered=="password"){
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
      document.getElementById("passwordError").innerHTML="Bad password.";
    }else{
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
    }
  }
//   //Show message that there is an error with the username...
//   document.getElementById("usernameError").innerHTML="Bad username.";
//   document.getElementById("usernameError").classList.remove("hidden-message");
//   document.getElementById("usernameError").classList.add("shown-message");
//   //Turn the username items red
//   document.getElementById("usernameGroup").classList.add("has-error");
//   document.getElementById("usernameGroup").classList.add("has-success");
//
//   //Show message that there is an error with the password...
//   document.getElementById("passwordError").innerHTML="Bad password.";
//   document.getElementById("passwordError").classList.remove("hidden-message");
//   document.getElementById("passwordError").classList.add("shown-message");
//   //Turn the password items red
//   document.getElementById("passwordGroup").classList.add("has-error");
}
