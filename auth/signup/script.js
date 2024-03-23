function validate() {
    if (event.target.value == "") {
        event.target.setAttribute("class", "form-control is-invalid");
    } else if (event.target.value != "") {

        if (event.target.type == "email") {
            //checking for specific mail validation
            if (emailCheck(event.target.value)) {
                event.target.setAttribute("class", "form-control is-valid");
                document.getElementsByClassName("feedback")[2].innerHTML = "looks good";
            } else {
                event.target.setAttribute("class", "form-control is-invalid");
                document.getElementsByClassName("feedback")[2].innerHTML = "please type a valid email";
            }
        } else if (event.target.type == "password" && event.target.id == "pwd-2") {
            if (document.getElementById('pwd-1').value == document.getElementById('pwd-2').value) {
                event.target.setAttribute("class", "form-control is-valid");
                document.getElementById("pwd-1").setAttribute("class", "form-control is-valid");
                document.getElementsByClassName("feedback")[4].innerHTML = "Password is fine";
            } else {
                event.target.setAttribute("class", "form-control is-invalid");
                document.getElementById("pwd-1").setAttribute("class", "form-control is-invalid");
                document.getElementsByClassName("feedback")[4].innerHTML = "Passwords must be the same";
            }
        }else if(event.target.type == "password" && event.target.id == "pwd-1"){

        } else {
            event.target.setAttribute("class", "form-control is-valid");
        }
    } else {
        event.target.setAttribute("class", "form-control is-valid");
    }
}

let profileData = {
    fname: '',
    lname: '',
    email: '',
    pwd: '',
    phone: 0,
    address: '',
    city: '',
    gender: ''
}

//submit function

const form = document.getElementById("signup");

form.addEventListener("submit", submit);

function submit(e) {
    e.preventDefault();
    let tempProfileData = profileData;
    if (document.getElementById('fname').value != "") {

        tempProfileData.fname = document.getElementById('fname').value;
        if (document.getElementById('lname').value != "") {

            tempProfileData.lname = document.getElementById('lname').value;
            if (document.getElementById('email').value != "") {

                tempProfileData.email = document.getElementById('email').value;
                if (document.getElementById('pwd-1').value == document.getElementById('pwd-2').value) {

                    tempProfileData.pwd = document.getElementById('pwd-1').value;
                    if (document.getElementById('phone').value != "") {

                        tempProfileData.phone = document.getElementById('phone').value;
                        if (document.getElementById('address').value != "") {

                            tempProfileData.address = document.getElementById('address').value
                            if (document.getElementById('city').value != "") {

                                tempProfileData.city = document.getElementById('city').value;
                                if (document.getElementById('male').checked) {
                                    tempProfileData.gender = 'male';
                                    profileData = tempProfileData;
                                } else if (document.getElementById('female').checked) {
                                    tempProfileData.gender = 'female';
                                    profileData = tempProfileData;
                                } else if (document.getElementById('other').checked) {
                                    tempProfileData.gender = 'other';
                                    profileData = tempProfileData;
                                } else {
                                    document.getElementsByClassName("feedback")[7].innerHTML = "Please choose a gender";
                                    tempProfileData = {};
                                }
                            }
                        }
                    }
                } else {
                    document.getElementsByClassName("feedback")[4].innerHTML = "Passwords must be the same";
                    tempProfileData = {};
                }
            }
        }
    }
    //clear
    localStorage.removeItem("cartProfile");

    //store
    localStorage.setItem("cartProfile",JSON.stringify(profileData));

    //retrieve
    console.log(JSON.parse(localStorage.getItem("cartProfile")));

    redirect();

}

function redirect(){
    document.querySelector("head").innerHTML = '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="refresh" content="2; url=.././login/login.html" ><link rel="stylesheet" href="./style.css"><link rel="stylesheet" href="../../assets/bootstrap/css/bootstrap.css"><title>Sign up</title>'
}

function emailCheck(input) {

    //we create a patern variable 
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
        console.log('true email');
        return true;
    } else {
        console.log('false email');
        return false;
    }
}