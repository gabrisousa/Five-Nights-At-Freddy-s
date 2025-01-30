const imagem = document.getElementById('minhaImagem');
const video = document.getElementById('jumpscareNightmareFreddy');
const audio = document.getElementById('audio-nightmare-freddy');
const mostrarCaixa = document.getElementById('caixa-nightmare-freddy-maior-escondido');
const mostrarMascara = document.querySelector(".mascara-2");


function Box() {
  mostrarCaixa.style.display = 'block';




  mostrarMascara.style.visibility = "visible"





}


function janela() {
  mostrarCaixa.style.display = "none"
  mostrarMascara.style.visibility = "hidden"

}


imagem.addEventListener('click', () => {
  video.style.display = 'block';
  video.play();

  setTimeout(() => {
    audio.play();
    video.style.display = 'none';



  }, 3000);



});



const imagem2 = document.getElementById('Nightmare-chicaImagem');
const video2 = document.getElementById('jumpscareNightmarechica');
const mostrarCaixa2 = document.getElementById('caixa-nightmare-chica-maior-escondido');


function Box2() {

  mostrarCaixa2.style.display = 'block';
  mostrarMascara.style.visibility = "visible"




}


function janela2() {
  mostrarCaixa2.style.display = 'none';
  mostrarMascara.style.visibility = "hidden"

}





imagem2.addEventListener('click', () => {
  video2.style.display = 'block';
  video2.play();
  setTimeout(() => {
    video2.style.display = 'none';
  }, 3000);
});








const imagem5 = document.getElementById('nightmare-bonnieImagem');
const video5 = document.getElementById('jumpscare-nightmare-bonnie');
const mostrarCaixa5 = document.getElementById('caixa-nightmare-bonnie-maior-escondido');



function Box5() {

  mostrarCaixa5.style.display = 'block';
  mostrarMascara.style.visibility = "visible"




}


function janela5() {
  mostrarCaixa5.style.display = 'none';
  mostrarMascara.style.visibility = "hidden"
}


imagem5.addEventListener('click', () => {
  video5.style.display = 'block';
  video5.play();
  setTimeout(() => {
    video5.style.display = 'none';
  }, 3000);
});







const imagem4 = document.getElementById('nightmare-foxyImagem');
const video4 = document.getElementById('jumpscare-nightmare-foxy');
const mostrarCaixa4 = document.getElementById('caixa-nightmare-foxy-maior-escondido');



function Box4() {

  mostrarCaixa4.style.display = "block"
  mostrarMascara.style.visibility = "visible"




}


function janela4() {
  mostrarCaixa4.style.display = "none"
  mostrarMascara.style.visibility = "hidden"

}


imagem4.addEventListener('click', () => {
  video4.style.display = 'block';
  video4.play();
  setTimeout(() => {
    video4.style.display = 'none';
  }, 3000);




});





const imagem6 = document.getElementById('nightmarionneImagem');
const video6 = document.getElementById('jumpscare-nightmarionne');
const audio6 = document.getElementById('audio-nightmarionne');
const mostrarCaixa6 = document.getElementById('caixa-nightmarionne-maior-escondido');



function Box6() {

  mostrarCaixa6.style.display = "block"
  mostrarMascara.style.visibility = "visible"




}


function janela6() {
  mostrarCaixa6.style.display = "none"
  mostrarMascara.style.visibility = "hidden"

}


imagem6.addEventListener('click', () => {
  video6.style.display = 'block';
  video6.play();
  setTimeout(() => {
    video6.style.display = 'none';
    audio6.play();
  }, 3000);




});







const imagem3 = document.getElementById('logoFnaf');
const video3 = document.getElementById('jumpscare-fredbear');
const audio3 = document.getElementById('audio-Fredbear');
const mostrarCaixa3 = document.getElementById('caixa-fredbear-maior-escondido');



function Box3() {

  mostrarCaixa3.style.display = "block"
  mostrarMascara.style.visibility = "visible"




}


function janela3() {
  mostrarCaixa3.style.display = "none"
  mostrarMascara.style.visibility = "hidden"

}


imagem3.addEventListener('click', () => {
  video3.style.display = 'block';
  video3.play();
  setTimeout(() => {
    video3.style.display = 'none';
    audio3.play();
  }, 3000);




});