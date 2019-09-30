function authenticator()
{

var p1 = document.getElementById("p1").value;
var p2 = document.getElementById("p2").value;

  if(p1 == p2 && p1.length > 7)
  {

    alert("Validated! Passwords match and are at least 8 characters long.");

  }

  if(p1 !== p2 && p1.length > 7)
  {

    alert("Passwords do not match!");

  }

  else if(p1 == p2 && p1.length < 8)
  {

    alert("Passwords must be at least 8 characters long!");

  }

  else if(p1 !== p2 && (p1.length < 8 || p2.length < 8))
  {

    alert("Passwords do not match are not more than 8 characters long!")

  }

}
