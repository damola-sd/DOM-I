const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// let links = document.querySelectorAll("a");
// links.forEach (item => item.textContent(siteContent.nav.nav-item));
let nav = document.querySelector("nav");
nav.setAttribute('style', 'color: green');
let links = document.querySelector('a');
links.setAttribute('style', "color: inherit");

// nav.style.color = 'green';
const newLink = document.createElement('a');
newLink.textContent = 'Sign In';
newLink.href = '#';
nav.appendChild(newLink);



nav.prepend("Welcome");


nav.children[0].textContent = siteContent.nav["nav-item-1"];
nav.children[1].textContent = siteContent.nav["nav-item-2"];
nav.children[2].textContent = siteContent.nav["nav-item-3"];
nav.children[3].textContent = siteContent.nav["nav-item-4"];
nav.children[4].textContent = siteContent.nav["nav-item-5"];
nav.children[5].textContent = siteContent.nav["nav-item-6"];


let ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let mainSection = document.querySelector(".main-content");
let topSection = mainSection.querySelector(".top-content");
let topSectionText = topSection.querySelector(".text-content");
topSectionText.children[0].textContent = siteContent["main-content"]["features-h4"];
topSectionText.children[1].textContent = siteContent["main-content"]["features-content"];


let secondTopSectionText = topSection.children[1];
secondTopSectionText.children[0].textContent = siteContent["main-content"]["about-h4"];
secondTopSectionText.children[1].textContent = siteContent["main-content"]["about-content"];


document.querySelector("#middle-img").src = siteContent["main-content"]["middle-img-src"];

let bottomSection = mainSection.querySelector(".bottom-content");
let bottomSectionText = bottomSection.querySelector(".text-content");
bottomSectionText.children[0].textContent = siteContent["main-content"]["services-h4"];
bottomSectionText.children[1].textContent = siteContent["main-content"]["services-content"];

let secondBottomSectionText = bottomSection.children[1];
secondBottomSectionText.children[0].textContent = siteContent["main-content"]["product-h4"];
secondBottomSectionText.children[1].textContent = siteContent["main-content"]["product-content"];


let thirdBottomSectionText = bottomSection.children[2];
thirdBottomSectionText.children[0].textContent = siteContent["main-content"]["vision-h4"];
thirdBottomSectionText.children[1].textContent = siteContent["main-content"]["vision-content"];
let contactSection = document.querySelector(".contact");

contactSection.children[0].textContent = siteContent.contact["contact-h4"];
contactSection.children[1].textContent = siteContent.contact.address;
contactSection.children[2].textContent = siteContent.contact.phone;
contactSection.children[3].textContent = siteContent.contact.email;

let footer = document.querySelector("footer");
footer.children[0].textContent = siteContent.footer.copyright;