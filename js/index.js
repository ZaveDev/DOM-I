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
document.title = "Great Idea!";

let body = document.querySelector("body");
body.style.color = "white";
body.style.background = "#1a1a1a";

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelector("nav");
let allNavLinks = document.querySelectorAll("a");
allNavLinks[0].textContent = siteContent.nav["nav-item-1"];
allNavLinks[1].textContent = siteContent.nav["nav-item-2"];
allNavLinks[2].textContent = siteContent.nav["nav-item-3"];
allNavLinks[3].textContent = siteContent.nav["nav-item-4"];
allNavLinks[4].textContent = siteContent.nav["nav-item-5"];
allNavLinks[5].textContent = siteContent.nav["nav-item-6"];

let navAdd1 = document.createElement("a");
let navAdd2 = document.createElement("a");
navAdd1.textContent = "Work";
nav.appendChild(navAdd1)
navAdd2.textContent = "Play";
nav.prepend(navAdd2);

allNavLinks = document.querySelectorAll("a");
allNavLinks.forEach(item => {
  item.style.color = "green";
  item.style.border = "1px dashed green";
  item.style.padding = "1%";
  item.style.cursor = "pointer";
});

let pageTitle = document.querySelector(".cta-text > h1");
pageTitle.textContent = siteContent.cta.h1;
let ctaButton = document.querySelector(".cta-text > button");
ctaButton.textContent = siteContent.cta.button;
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

let features = document.querySelectorAll(".top-content > .text-content");
let f1 = features[0].querySelector("h4");
let f1Cont = features[0].querySelector("p");
let f2 = features[1].querySelector("h4");
let f2Cont = features[1].querySelector("p");
f1.textContent = siteContent["main-content"]["features-h4"];
f1Cont.textContent = siteContent["main-content"]["features-content"]
f2.textContent = siteContent["main-content"]["about-h4"]
f2Cont.textContent = siteContent["main-content"]["about-content"]

let mainImg = document.querySelector("#middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottom = document.querySelectorAll(".bottom-content > .text-content");
let b1 = bottom[0].querySelector("h4");
let b1Cont = bottom[0].querySelector("p");
let b2 = bottom[1].querySelector("h4");
let b2Cont = bottom[1].querySelector("p");
let b3 = bottom[2].querySelector("h4");
let b3Cont = bottom[2].querySelector("p");

b1.textContent = siteContent["main-content"]["services-h4"];
b1Cont.textContent = siteContent["main-content"]["services-content"];
b2.textContent = siteContent["main-content"]["product-h4"];
b2Cont.textContent = siteContent["main-content"]["product-content"];
b3.textContent = siteContent["main-content"]["vision-h4"];
b3Cont.textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
let c1 = contact.querySelector("h4");
let cPs = contact.querySelectorAll('p');
c1.textContent = siteContent.contact["contact-h4"];
cPs[0].textContent = siteContent.contact.address;
cPs[1].textContent = siteContent.contact.phone;
cPs[2].textContent = siteContent.contact.email;

let foot = document.querySelector('footer');
foot.textContent = siteContent.footer.copyright;


