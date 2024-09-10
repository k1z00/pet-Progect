





/*Бургер*/
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav_item_text");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  hamburger.classList.toggle("active");
});

/*Бургер*/



const buttonInfo = document.querySelector("#button-info");
const infoContact = document.querySelector(".info_contact");

const objInfo = [
  {
    src: "img/free-icon-vk-3670055.png",
    href: "https://vk.com/id851485203",
  },
  {
    src: "img/free-icon-instagram-2111463.png",
    href: "https://www.example.com/instagram",
  },
  {
    src: "img/free-icon-telegram-2111646.png",
    href: "https://web.telegram.org/k/#@gftW21",
  },
];



function getApend(data, time) {
  return data.appendChild(time);
}



let iconsAdded = false;
function getInfoIcons() {
  for (let i = 0; i < objInfo.length; i++) {
    const infoIcons1 = document.createElement("span");
    const infoIcons2 = document.createElement("img");
    const infoIcont = document.createElement("a");

    infoIcons2.classList.add("span-info");

    infoIcons2.src = objInfo[i].src;

    getApend(infoIcons1, infoIcons2);
    getApend(infoIcons2, infoIcont);
    getApend(infoContact, infoIcons1);

    infoIcont.href = objInfo[i].href;
    const infoContacte = document.querySelector(".span-info");

   
    infoIcont.href = objInfo[i].href;

    
    infoIcons2.addEventListener("click", (event) => {
      window.open(infoIcont.href, "_blank");
    });
  }
}

buttonInfo.addEventListener("click", () => {
  if (!iconsAdded) {
    getInfoIcons();
    iconsAdded = true;
  } else {
    infoContact.querySelectorAll("span").forEach((span) => span.remove());
    iconsAdded = false;
  }
});









const Skills = document.querySelector("#Skills");
const mySkils = document.querySelector(".text__skills");
const muProgects = document.querySelector(".main__project");
const Projects = document.querySelector("#Projects");
const Message = document.querySelector("#Message");
const footer = document.querySelector(".footer");

Skills.addEventListener('click', () => {
  const offset = 85; 
  window.scrollTo({
    top: mySkils.offsetTop - offset, 
    behavior: 'smooth'
  });
});

Projects.addEventListener('click', () => {
  const offset = 85; 
  window.scrollTo({
    top: muProgects.offsetTop - offset, 
    behavior: 'smooth'
  });
});


Message.addEventListener('click', () => {
  const offset = 80; 
  window.scrollTo({
    top: footer.offsetTop - offset, 
    behavior: 'smooth'
  });
});













const imgProject = document.querySelector(".img_progect");
const h2Project = document.querySelector(".h2_project");
const textContentProject = document.querySelector(".text_content_project");
const arrow1 = document.querySelector("#Arow1");
const arrow2 = document.querySelector("#Arow2");

const objProject = [
  {
    src: "img/GgpBQdVJpR4.jpg",
    href: "https://k1z00.github.io/pet-Progect/",
    h2: "проект 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consectetur harum temporibus beatae, culpa tempora odit alias fugiat ducimus perferendis, eveniet dolorum ipsam, necessitatibus corrupti quibusdam deleniti! Veniam, quia maxime.",
  },
  {
    src: "img/GgpBQdVJpR4.jpg",
    href: "https://www.example.com/instagram",
    h2: "проект 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, reprehenderit corporis animi, aliquam vero maxime, autem hic delectus nisi dolor sunt doloremque odio eveniet rerum laborum? Mollitia deserunt impedit at.",
  },
  {
    src: "img/GgpBQdVJpR4.jpg",
    href: "https://web.telegram.org/k/#@gftW21",
    h2: "проект 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi voluptas, voluptates inventore quas, distinctio dolore architecto ratione neque eum optio eligendi perspiciatis asperiores tempore beatae accusantium quis excepturi explicabo.",
  },
];




function updateProject(newIndex) {
  currentIndex = newIndex;
  imgProject.src = objProject[currentIndex].src;
  h2Project.textContent = objProject[currentIndex].h2;
  textContentProject.textContent = objProject[currentIndex].text;
  linkElement.href = objProject[currentIndex].href;
}



const linkElement = document.createElement("a");

imgProject.appendChild(linkElement);

let currentIndex = 0;


updateProject(0);

arrow2.addEventListener("click", () => {
  updateProject((currentIndex + 1) % objProject.length);
});

arrow1.addEventListener("click", () => {
  updateProject((currentIndex - 1 + objProject.length) % objProject.length);
});

imgProject.addEventListener("click", () => {
  window.open(linkElement.href, "_blank");
});


