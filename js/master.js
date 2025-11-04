//check if ther is stroage color option
let maincolors = localStorage.getItem("color_option");



if (maincolors !== null) {

    // console.log('Local storage Is not Empty')
    // console.log(localStorage.getItem("color_option"))

    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));


    // Remove active class from All colors list items 
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add active class to Elements with Data === local storage Items
        if (element.dataset.color === maincolors) {

            //Add Active class
            element.classList.add("active");
        }
    });
    

}



// Random Background Option
let backgroundOption = true;

// Variable To control The Interval
let backgroundInterval;

// Check If there is local storage Random Items
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background local Storage is Not Empty
if (backgroundLocalItem !== null) {


    if (backgroundLocalItem === 'true') {

        backgroundOption = true
    } else {
        backgroundOption = false;
    }

  // Remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  } else {

    document.querySelector(".random-backgrounds .no").classList.add("active");  }
}


// Toggle spin class on Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // Toggle class Fa-spin For Rotatio on Self
    this.classList.toggle("fa-spin")

    // Toggle class Open On <ain Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
}


// Switch colors
const colorsli = document.querySelectorAll(".color-list li");

// Trying
if (localStorage.getItem('color_option')) {

    colorsli.forEach(list => {
        list.classList.remove("active")
    })

    document.querySelector(`[data-color="${localStorage.getItem('color_option')}"]`).classList.add("active");
} else {
    console.log("No")
}

// loop on all list items
colorsli.forEach(li => {

    //click on all list items
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);



        // Set Color in local Storage
        localStorage.setItem('color_option', e.target.dataset.color);


        // Remove active class from All Childerns
        
        handelActive(e);


    })

});


// Switch Random background option
const randomBackgroundEl = document.querySelectorAll(".random-backgrounds span");

// loop on all span
randomBackgroundEl.forEach(span => {

    //click on all list items
    span.addEventListener("click", (e) => {


        handelActive(e);

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true;
            randomizImgs();

            localStorage.setItem("background_option", true);
            
        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);

        }

    })

});


// Select Landing page Element
let LandingPage =document.querySelector(".landing-page");

// Get Array of Images
let imgsArray = ["Image01.jpg", "image02.jpeg", "image03.jpg", "image04.webp", "image05.webp"]




// Function to Randomize Img
function randomizImgs() {

    // Get Random Number
    backgroundInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
        // Change background Image 
        LandingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber]+'")';
    },3000);

} 

randomizImgs();


// Select skills selector

let ourskills = document.querySelector(".skills");

window.onscroll = function () {

    // skills offset Top
    let skillsOffsetTop = ourskills.offsetTop;

    // Skills outer Height
    let skillsouterHeight = ourskills.offsetHeight;

    //Window Height
    let windowHeight = this.innerHeight;

    // window scrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > skillsOffsetTop - windowHeight) {

        let allskills = document.querySelectorAll(".skill-box .skill-progress span");

        allskills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }
}


// Creat popup With thr Image

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Ovelay to the body
    document.body.appendChild(overlay);

    // Create The popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    // Create The Image
    let popupImage =document.createElement("img");

    //set Image source 
    popupImage.src =img.src;

    //Add Image to popup Box
    popupBox.appendChild(popupImage);

    // Appen The popup Box To body
    document.body.appendChild(popupBox);

    if (img.alt !== null) {

        // create Heading
        let imgHeading =document.createElement("h3");

        // Create text For Heading
        let imgText =document.createTextNode(img.alt);

        // Append The Text to the Heading
        imgHeading.appendChild(imgText);

        // Append the heading to the popup box
        popupBox.append(imgHeading);

        // Create the clos span
        let closeButton = document.createElement("span")

        // create the close button text
        let closeButtonText = document.createTextNode("x");

        //Append text to close button

        closeButton.appendChild(closeButtonText);

        // Add class to close Button
        closeButton.className = 'close-button';

        // Add close Button to the popup Box
        popupBox.appendChild(closeButton);
    }
})

})


// close popup
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

        // Remove The current popup
        e.target.parentNode.remove();

        // Remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});

// Select all bullets 

const allbullets =document.querySelectorAll(".nav-bullets .bullet");

// Select all bullets 

const allLinks =document.querySelectorAll(".links a");


// Scroll Function
function scrollToSection (elements) {
    elements.forEach (element => {
        element.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'

            })
        })
    })
}

scrollToSection(allbullets);
scrollToSection(allLinks);

// Handel Active state

function handelActive(ev){ 

    // Remove Active class From All childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    // Add Active Class on self
    ev.target.classList.add("active");

}

let bulletsSpan =document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    })

}

if (bulletLocalItem === 'block' ){

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add('active');

} else if (bulletLocalItem === 'none') {

            bulletsContainer.style.display = 'none';

            document.querySelector(".bullets-option .no").classList.add('active');

        }

bulletsSpan.forEach(span => {
    
    span.addEventListener("click", (e) => {

        if (span.dataset.display == 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block')

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none')


        }
        handelActive(e);

    })
});

//Reset Button
document.querySelector(".reset-option").onclick = function () {

    localStorage.clear();
    // localStorage.removeItem("bullets_option");
    // localStorage.removeItem("color_option");
    // localStorage.removeItem("background_option");

    window.location.reload();

}

// Toggele Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle class "menu-active" On Button
    this.classList.toggle("menu-active");

    // Toggle class "open" On click
    tlinks.classList.toggle("open");
}

// click anywhere outside menu and toggle button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tlinks) {

        // Check if Menu Is Open
        if (tlinks.classList.contains("open")) {

            // Toggle class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle class "open" On click
            tlinks.classList.toggle("open");

        }
    }
})

// Stop Propagation On Menu

tlinks.onclick = function (e) {

    e.stopPropagation();

}


