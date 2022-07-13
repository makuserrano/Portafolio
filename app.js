//btn responsive
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}


openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".menu a[href^='#']");
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        menu.classList.remove("menu_opened");
    })
})

// Enviar mail 

function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });

}

validate();

function sendmail(name, email, msg) {
    emailjs.send("service_1tvr1eq", "template_duico0x", {
        to_name: email,
        from_name: name,
        message: msg,
    });
}