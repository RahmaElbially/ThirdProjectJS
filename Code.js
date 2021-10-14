/* Calling Variables */

let image = document.getElementsByTagName("img")[0];

let designerName = document.getElementsByClassName("Name")[0];

let jop = document.getElementsByClassName("jop")[0];

let information = document.getElementsByClassName("information")[0];

let next = document.getElementById("next");

let prev = document.getElementById("prev");

let randomBtn = document.getElementsByClassName("random")[0];

let currentItem = 0;


// Array Has Objects about Web Developer Information

let reviews = [
    {
        id: 1,
        name: "Ethan Marcotte",
        jop: "Graphic designer",
        img:"ethan.webp",
        info:"If there's one man in the web industry who probably doesn't need an introduction, it's Ethan Marcotte. One of the web's best-known designers, Marcotte is a regular and popular speaker on the conference circuit and, in his own words, the one who started that whole 'responsive web design' thing."
    },
    {
        id: 2,
        name: "Sara Soueidan",
        jop: "UI/UX Developer",
        img:"sara.webp",
        info:"A Lebanon-based frontend UI developer and author, Sara has worked with clients across the globe . She runs workshops and helps companies and agencies build clean frontend foundations for websites and applications, with a strong focus on progressive enhancement, performance and accessibility."
    },
    {
        id: 3,
        name: "Dave Shea",
        jop: "web designer",
        img:"dave.webp",
        info:"Dave Shea is most famous for his CSS Zen Garden project, which helped spearhead the move from table-based web design layout to CSS-based layouts. he is helping to push the boundaries of what designs could be achieved with CSS alone, and also encouraging web designers the world over to adopt the approach."
    },
    {
        id: 4,
        name: "Rahma Elbially",
        jop: "Web designer",
        img:"21.jpg",
        info:"A Lebanon-based frontend Web developer and author, Rahma has worked with clients across the globe . She runs workshops and helps companies and agencies build clean frontend foundations for websites and applications, with a strong focus on progressive enhancement, performance and accessibility."
    },
]

// Function To Get All Information About People

function peopleInfo(){
    const item = reviews[currentItem];
    image.src = item.img;
    designerName.textContent = item.name;
    jop.textContent = item.jop;
    information.textContent = item.info;
    next.style.marginTop = "-110px";
    prev.style.marginTop = "-110px";
}

window.addEventListener("DOMContentReloaded", ()=>{
    peopleInfo();
});

// Next Button

next.addEventListener('click', ()=>{
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    peopleInfo();
    currentItem++;
});

// Previous Button 

prev.addEventListener('click', ()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    peopleInfo();
});

// Random Button

randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random()* reviews.length);
    peopleInfo();
});

