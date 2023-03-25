//--------------------------------------------------Menubar -------------------------------
// var sidemeu = document.getElementById("sidemenu");
// function openmenu() {
//     sidemenu.style.right = "0";
// }
// function closemenu() {
//     sidemenu.style.right = "-200px";
// }

function openmenu() {
    var element = document.getElementById("mynav");
    element.classList.toggle("show");
    console.log("smsn")
    }

// -------------------------------------Auto type--------------------------------------------------
var typed = new Typed(".auto-type", {
    strings: ["Web Developer","UI Designer","JAVA","Mysql","HTML","JavaScript","C","Python"],
   typespeed: 150,
   backSpeed: 150,
   loop: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbygQ24S8V4I231pFp3e_hy6lXLjRsOivy-0UaMkTTh_6szK5yVHFoxVEM1r9YPef20/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})