
const mainContent = document.getElementById("main_content");
const container = document.querySelector('.bubbles');
const mainText = document.createElement("div");
const iValues = [11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 28, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 28, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17,12, 24, 10, 14, 23, 18, 16,11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 21, 15, 13, 26, 17, 28, 12, 24, 10, 14, 23,];
mainText.className = "name";
mainText.innerHTML = `
    <div class="content">
        <div class="content__container">
            <p class="content__container__text">
                Hola
            </p>
            
            <ul class="content__container__list">
                <li class="content__container__list__item">world !</li>
                <li class="content__container__list__item">users !</li>
                <li class="content__container__list__item">recruiters !</li>
                <li class="content__container__list__item">everyone  !</li>
            </ul>
        </div>
        <div class="text"> 
            <h1> Felipe Vergara </h1>
            <h2> Frontend developer </h2>
            <div class= "buttons">
                <button id="CV">
                download CV
                <img src="../IMG/download2.png" alt="">
                </button>
                <button id="linkedin">
                Contact me
                <img src="../IMG/telegram2.png" alt="">
                </button>
            </div>
        </div>
        <div class="container_bg"> 
            <div class="bubbles">
                ${iValues.map(i => `<span style="--i:${i};"></span>`).join('')}
            </div>
        </div>
    </div>
    `;
mainContent.appendChild(mainText); 
var downloadbttn= document.getElementById("CV");

downloadbttn.addEventListener('click',function(){
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/folders/1-LOzLTnh0D0x0JRKkhyEsIxBCADpvfGG?hl=es';
    link.download = 'CV_LFV.pdf';
    link.style.display = 'none';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

var linkedin= document.getElementById("linkedin");

linkedin.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/felipe-vergara-zorrilla-88606b231/', '_blank');
})

// profile picture

var profileContent = document.querySelector(".Profile_container");

profileContent.innerHTML=`

    <img class="img_profile" src="./IMG/fel3.jpg" alt="" srcset="">
    <div class="text_aboutme">
        <h2>
            Who I am
        </h2>
        <h1 class="aboutme">
            About Me
        </h1>
        <p>
            I am a Colombian biologist who came to Argentina with the goal of pursuing a master's degree in biodiversity conservation at University of Buenos Aires (UBA). After completing my master's, I fell in love with Argentina and decided to stay. My first encounter with the world of programming was during my undergraduate thesis, where I started working with Geographic Information Systems (GIS) and learned to use R Studio to create ecosystem maps and manage databases. Later, I began studying Frontend programming and discovered my passion for programming and developing web pages that offer unique user experiences. You can see some of my projects in the projects section.
        </p>
        <p>
            As you can see, I am a person who is constantly seeking knowledge. I love learning new things, and for much of my life, I have been self-taught, learning new technologies and tools to improve my skills and further develop as a professional.
        </p>
        <p>
            If you want to know more about me, feel free to <b>contact me</b>.
        </p>
    </div>
  
        
        ´
        
`
// profileContent.appendChild()


// using particles!!!

fetch('./JS/particlesjs-config.json')
    .then(function(response) {
    return response.json();
})
.then(function(config) {
    // Utilizar la configuración para configurar particles.js
    particlesJS('particles-js', config);
})
.catch(function(error) {
    console.error('Error al cargar la configuración de particles.js', error);
});


// changing lang

var check = document.querySelector(".check");
var langSelected = false; // Variable para llevar el registro del estado del idioma
var originalScript = document.createElement('script'); // Crear un elemento script para el JS original
originalScript.src = "/JS/main.js"; // Establecer la ruta del JS original
var alternateScript = document.createElement('script'); // Crear un elemento script para el JS alternativo
alternateScript.src = "/JS/en-main.js"; // Establecer la ruta del JS alternativo

check.addEventListener('click', lang);

function lang() {
    if (langSelected) {
    // Cambiar al archivo HTML y JS original
        location.href = "./index.html";
        document.head.appendChild(originalScript); // Agregar el JS original al head del nuevo HTML
    } else {
    // Cambiar al archivo HTML y JS alternativo
        location.href = "./en-index.html";
        document.head.appendChild(alternateScript); // Agregar el JS alternativo al head del nuevo HTML
    }
}

// Actualizar el estado del checkbox al cargar la página
window.addEventListener('load', function() {
  // Obtener el idioma actual de la página cargada
var currentUrl = window.location.href;
    if (currentUrl.includes("en-index.html")) {
    langSelected = true;
    check.checked = true;
    document.head.appendChild(alternateScript); // Agregar el JS alternativo al head de la página cargada
    } else {
    langSelected = false;
    check.checked = false;
    document.head.appendChild(originalScript); // Agregar el JS original al head de la página cargada
    }
});


