
/*Бургер*/
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav_item_text");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  hamburger.classList.toggle("active");
 
});

/*Бургер*/








/*const objInfo = ['/img/free-icon-incoming-call-4347465.png','/img/free-icon-instagram-2190361.png ','/img/free-icon-telegram-2111646.png']*/

const buttonInfo = document.querySelector("#button-info");
const infoContact = document.querySelector(".info_contact");


const objInfo = [
  {
    src: '/img/free-icon-vk-draw-logo-71839.png',
    href: 'https://vk.com/id851485203'
  },
  {
    src: '/img/free-icon-instagram-2190361.png ',
    href: 'https://www.example.com/instagram'
  },
  {
    src: '/img/free-icon-telegram-2111646.png',
    href: 'https://web.telegram.org/k/#@gftW21'
  }
];


function getApend (data, time) {
  return data.appendChild(time)
}



let iconsAdded = false;
function getInfoIcons () {
  for(let i = 0; i < objInfo.length; i++){
    const infoIcons1 = document.createElement('span')
    const infoIcons2 = document.createElement('img')
    const infoIcont = document.createElement('a')

    infoIcons2.classList.add('span-info')

    infoIcons2.src = objInfo[i].src


    getApend(infoIcons1, infoIcons2)
    getApend(infoIcons2, infoIcont)
    getApend(infoContact, infoIcons1)

    infoIcont.href = objInfo[i].href;
    const infoContacte = document.querySelector(".span-info");


     // Присваиваем href к элементу a (infoIcont)
     infoIcont.href = objInfo[i].href;

     // Добавляем обработчик события click к изображению
     infoIcons2.addEventListener('click', (event) => {
       window.open(infoIcont.href, '_blank')
     });
      
  }}

  
 

  buttonInfo.addEventListener('click',() => {
    if (!iconsAdded) { 
      getInfoIcons ()
      iconsAdded = true;
    }else{
      infoContact.querySelectorAll("span").forEach(span => span.remove());
      iconsAdded = false;
    }})

  







  





    
