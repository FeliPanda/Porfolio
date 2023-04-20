
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
                <li class="content__container__list__item">mundo !</li>
                <li class="content__container__list__item">usuarios !</li>
                <li class="content__container__list__item">reclutadores !</li>
                <li class="content__container__list__item">a todos !</li>
            </ul>
        </div>
        <div class="text"> 
            <h1> Felipe Vergara </h1>
            <h2> Desarrollador Frontend </h2>
            <div class= "buttons">
                <button id="CV">
                Descargar CV
                <img src="../IMG/download2.png" alt="">
                </button>
                <button id="linkedin">
                Contáctame
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
        quien soy 
        </h2>

        <h1>
        Sobre mí
        </h1>
        <p>
            Soy un biólogo Colombiano, que vine a Argentina con el fin de realizar una maestria en la UBA en conservación de la biodiversidad, despues de terminar la maestría me enamore de Argentina y decidí quedarme, mis primeras aproximaciones al mundo de la programación iniciaron en mis tesis de pregrado cuando empece a trabajar con Sistemas de Información Cartográficos (SIG), donde aprendí R studio para realizar mapas de ecosistemas y manejar bases de datos, tiempo despues me motive a hacer un curso de programación Frontend en Coder House porque tambien siempre me gusto el diseño y la fotografía, al terminar la carrera en Coder House me di cuenta de mi pasión por programar y desarrollar paginas web que brinden experiencias únicas a sus usuarios. puedes ver algunos de mis proyectos en las sección de <B>proyectos</B>.
        </p>
        <p>
            Como pueden darse cuenta soy una persona que esta en una busqueda constante de conocimiento, me encanta aprender cosas nuevas y en la gran mayoria de mi vida he sido autodidacta, aprendiendo nuevas tecnologias y herramientas que mejoren mis habilidades y me hagan desarrollar más como profesional.
        </p>
        <p>
            si quieren saber más de mi, no duden en <B>contactarse </B>conmigo.
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


// 











// mainText.className = "name";
// mainText.innerHTML = `
//     <div class="content">
//         <div class="content__container">
//             <p class="content__container__text">
//                 Hola
//             </p>
            
//             <ul class="content__container__list">
//                 <li class="content__container__list__item">mundo !</li>
//                 <li class="content__container__list__item">usuarios !</li>
//                 <li class="content__container__list__item">reclutadores !</li>
//                 <li class="content__container__list__item">a todos !</li>
//             </ul>
//         </div>
//         <div class="text"> 
//             <h1> Felipe Vergara </h1>
//             <h2> Desarrollador Frontend </h2>
//             <div class= "buttons">
//                 <button id="CV">
//                 Descargar CV
//                 <img src="../IMG/download2.png" alt="">
//                 </button>
//                 <button id="linkedin">
//                 Contáctame
//                 <img src="../IMG/telegram2.png" alt="">
//                 </button>
//             </div>
//         </div>
//     </div>
//     <div class="container_bg"> 
//         <div class="bubbles">
//             ${iValues.map(i => `<span style="--i:${i};"></span>`).join('')}
//         </div>
//     </div>
// `;
// mainContent.appendChild(mainText); 