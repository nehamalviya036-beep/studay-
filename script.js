console.log("Engineering Planner Loaded");

alert("Welcome To Smart Engineering College Planner");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

alert("Login Feature Coming Soon");

});

const loginPopup = document.getElementById("loginPopup");

function openLogin(){

loginPopup.classList.add("active");

}

function closeLogin(){

loginPopup.classList.remove("active");

}
/* PROFILE UPDATE */

function updateProfile(){

document.getElementById("profileName").innerText =
document.getElementById("nameInput").value;

document.getElementById("profileBranch").innerText =
document.getElementById("branchInput").value;

document.getElementById("profileBio").innerText =
document.getElementById("bioInput").value;

document.getElementById("cgpaText").innerText =
document.getElementById("cgpaInput").value;

document.getElementById("problemText").innerText =
document.getElementById("problemInput").value;

document.getElementById("projectText").innerText =
document.getElementById("projectInput").value;

document.getElementById("profileImg").src =
document.getElementById("imageInput").value;

alert("Profile Updated Successfully 🚀");

}