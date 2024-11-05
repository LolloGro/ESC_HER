const mainLink = document.querySelector(".main__open");
const menu = document.querySelector(".main__nav");

mainLink.addEventListener("click", (e) => {

    e.preventDefault();
    menu.setAttribute("class", "main__nav--open");
    console.log("click");
}); 

const mainClose = document.querySelector(".main__close");

mainClose.addEventListener("click", () => {
    menu.setAttribute("class", "main__nav");
}); 