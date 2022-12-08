function myFunction() {
    document.getElementById("contact").type="email";
    document.getElementById("contact").placeholder = "Email";
  }
  function myFunction1() {
    document.getElementById("contact").type="number";
    document.getElementById("contact").placeholder = "Phone";
  }

  
  
// Login
function openLogin()
{
  document.getElementById("LoginForm").style.display= "block";
	document.getElementById("overlaylogin").style.display = "block";
  document.getElementById("body").style.display="none";

}

function closeLogin()
{
	document.getElementById("LoginForm").style.display= "none";
	document.getElementById("overlaylogin").style.display = "none";
  document.getElementById("body").style.display="block";
}


//Sign Up
function openSignUp()
{
  document.getElementById("signup-form").style.display= "block";
	document.getElementById("overlaysignup").style.display = "block";
  document.getElementById("body").style.display="none";

}

function closeSignUp()
{
	document.getElementById("signup-form").style.display= "none";
	document.getElementById("overlaysignup").style.display = "none";
  document.getElementById("body").style.display="block";
	
}