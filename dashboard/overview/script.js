const profileData = JSON.parse(localStorage.getItem("cartProfile"));

console.log(profileData);

document.getElementsByClassName("greeting")[0].innerHTML = `<h2>Welocome ${profileData.fname} ${profileData.lname} </h2>`;