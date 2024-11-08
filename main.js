const body = document.querySelector("body");

const header = document.createElement("header");
header.setAttribute("class", "main");
body.appendChild(header);
body.prepend(header);

header.style.backgroundColor = "#011827";
header.style.display = "grid";
header.style.gridTemplateColumns = "150px auto auto";
header.style.height = "144px"; 

const img = document.createElement("img");
img.setAttribute("class", "main__img");
img.src = 'Logo.png';
header.appendChild(img);

img.style.width = "128px";
img.style.height = "82px";
img.style.gridColumn = "1";
img.style.marginTop = "26px";
img.style.marginLeft = "27px";

const titel = document.createElement("h1");
titel.setAttribute("class", "main__titel");
titel.innerText = "Hacker Escape Rooms";
header.appendChild(titel);

const screen = window.innerWidth;
console.log(screen);

if (screen < 1280) {
    titel.style.fontSize = "1.5rem";
    titel.style.color = "#FFFFFF";
    titel.style.gridColumn = "2";
    titel.style.width = "78px";
    titel.style.height = "84px";
    titel.style.alignContent = "end";
    titel.style.paddingLeft = "13px";    
} else {
    titel.style.fontSize = "2.5rem";
    titel.style.color = "#FFFFFF";
    titel.style.gridColumn = "2";
    titel.style.width = "auto";
    titel.style.alignContent = "end";
    titel.style.paddingLeft = "13px";
}

const mainOpen = document.createElement("a");
mainOpen.setAttribute("class", "main__open");
mainOpen.innerHTML = '<i class="fa-solid fa-bars"></i>';
header.appendChild(mainOpen);

if (screen < 1280) {
    mainOpen.style.gridColumn = "3";
    mainOpen.style.justifySelf = "end";
    mainOpen.style.color = "#FFFFFF";
    mainOpen.style.fontSize = "2.5rem";
    mainOpen.style.padding = "20px";
} else {
    mainOpen.style.display = "none";
}

const nav = document.createElement("nav");
nav.setAttribute("class", "main__nav");
body.appendChild(nav);
const mainDiv = document.querySelector(".main__div");
mainDiv.before(nav);

const navClose = document.createElement("a");
navClose.setAttribute("class", "main__close");
navClose.innerHTML = '<i class="fa-solid fa-xmark"></i>';
nav.appendChild(navClose);

const list = document.createElement("ul");
list.setAttribute("class", "main__ul");
nav.appendChild(list);

const navLinks = ["play online", "Play on-site", "The story", "Contact us"];

for (let i = 0; i < navLinks.length; i++) {
    const item = document.createElement("li");
    item.setAttribute("class", "main__li");
    const link = document.createElement("a");
    link.setAttribute("class", "main__li__item");
    link.innerText = navLinks[i];
    list.appendChild(item);
    item.appendChild(link);
}

mainOpen.addEventListener("click", (e) => {
    e.preventDefault();
    nav.setAttribute("class", "main__nav--open");
});

navClose.addEventListener("click", () => {
    nav.setAttribute("class", "main__nav")
}); 