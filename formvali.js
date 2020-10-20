function validate()
{
var name1=document.getElementById("name").value;
var pass1=document.getElementById("pass").value;
var email1=document.getElementById("email").value;
if(name1=="" || name1==" ")
{
	alert("Enter name");
}
if((pass1=="" || pass1==" " || pass1.length<8 || pass1.length>14)&& pass1!=pass1.match(/[A-Z]/g) && pass1!=pass1.match(/[0-9]/g))
	
{
	alert("password length must be gratter than 8 and Upper Case and one Lower Case");
}

}
