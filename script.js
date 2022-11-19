//* funcao passar banner

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideBanner = 0;


function showSlides() {
    for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
}

slideBanner++;
const VerificSlideBanner = slideBanner > slides.length

if (VerificSlideBanner) {
    slideBanner = 1;
}

slides[slideBanner - 1].classList.add("active");
dots[slideBanner - 1].classList.add("active");


setTimeout(showSlides, 4000);
}

showSlides();


/**funcao para Maquina de escrever */

const typing = document.querySelector('.types-js')

const messages = ['Criptomoedas ', 'Renda variavel ', 'Renda fixa ']

let slideIndex = 0

let messageIndex = 0

let messagetypin = ''

let messageDividida = ''

let cont = 0

const type = () => {
    const verificarArray = messageIndex == messages.length;
    
    if(verificarArray){
            messageIndex = 0
    }

    messagetypin = messages[messageIndex]

    messageDividida = messagetypin.split('')

    const verificarContador = cont == messageDividida.length;
    
    if (verificarContador){
    
        typing.textContent = ''
        cont = 0
        messageIndex++
        
    }else {
        typing.textContent += messageDividida[cont]
        cont++
    }
}

setInterval (type, 250)

