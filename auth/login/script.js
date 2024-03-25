
const form = document.getElementById("signin");

form.addEventListener("submit", logIn);


//load data

   function logIn(e){
    e.preventDefault();
    //retrieve
   const profileData = JSON.parse(localStorage.getItem("cartProfile"));

   console.log(profileData);

   if (document.getElementsByClassName("form-control")[0].value == profileData.email && document.getElementsByClassName("form-control")[1].value == profileData.pwd){
    window.location.replace("../.././dashboard/overview/overview.html")
   }else{
    document.getElementsByClassName("feedback")[0].innerHTML = "<b>Email or Password incorect !</b>";
    document.getElementsByClassName("form-control")[0].setAttribute("class", "form-control is-invalid");
    document.getElementsByClassName("form-control")[1].setAttribute("class", "form-control is-invalid");
   }
   }