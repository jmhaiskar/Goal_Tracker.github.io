function clickMe() {
  var text = document.getElementById("popup");
  text.classList.toggle("hide");
  text.classList.toggle("show");
};

function newClient(){
  var fName=document.getElementById("fName");
  localStorage.setItem("firstName",fName);

  var lName=document.getElementById("lName");
  localStorage.setItem("lastName",lName);

  var mail=document.getElementById("mail");
  localStorage.setItem("firstName",mail);

  console.log(fName,lName,mail);

}