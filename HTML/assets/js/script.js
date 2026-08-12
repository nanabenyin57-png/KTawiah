const hamburger=document.getElementById("hamburger_button");
const navmenu=document.getElementById("hamburgermenu");
const contact=document.getElementById("contact_info");

window.addEventListener("DOMContentLoaded", () => {
navmenu.style.display = "none";    
contact.style.display = "none";
});

hamburger.addEventListener("click", () => {
    if(navmenu.style.display==="none"){
        navmenu.style.display = "block";
        contact.style.display = "block";
    }
    else{
        navmenu.style.display = "none";
        contact.style.display = "none";
    }

});

document.addEventListener("click", (event) => {
  // Check if the click occurred OUTSIDE both the menu and the hamburger button
  if (!navmenu.contains(event.target) && !hamburger.contains(event.target)) {
    navmenu.style.display = "none";
    contact.style.display = "none";
  }
});