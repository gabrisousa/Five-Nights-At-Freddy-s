


const imagem6 = document.getElementById('logoFnaf');
const video6 = document.getElementById('jumpscareGolden');
const audio6 = document.getElementById('audioGolden');
const mostrarCaixa6 = document.getElementById('caixa-golden-escondido');
const mostrarMascara = document.querySelector(".mascara-2");




function Box6() {

  mostrarCaixa6.style.display = 'block';
  mostrarMascara.style.visibility = "visible"




}


function janela6() {
  mostrarCaixa6.style.display = 'none';
  mostrarMascara.style.visibility = "hidden"


}






imagem6.addEventListener('click', () => {
  imagem6.style.display = 'none';
  video6.style.display = 'block';
  video6.play();
  setTimeout(() => {
    video6.style.display = 'none';
    video6.pause();
    imagem6.style.display = 'block';
  }, 2000);
  audio6.play();

});






const imagem = document.getElementById('minhaImagem');
const video = document.getElementById('jumpscareAfton');
const audio = document.getElementById('audioAfton');
const mostrarCaixa = document.getElementById('caixa-william-maior-escondido');



function Box() {
  mostrarCaixa.style.display = 'block';




  mostrarMascara.style.visibility = "visible"





}


function janela() {
  mostrarCaixa.style.display = "none"
  mostrarMascara.style.visibility = "hidden"

}


imagem.addEventListener('click', () => {
  imagem.style.display = 'none';
  video.style.display = 'block';
  video.play();
  setTimeout(() => {
    video.style.display = 'none';
    video.pause();
    imagem.style.display = 'block';
  }, 5000);

  setTimeout(() => {
    audio.play();
  }, 1700);



});




const imagem2 = document.getElementById('freddyImagem');
const video2 = document.getElementById('jumpscareFreddy');
const audio2 = document.getElementById('musicaFreedy');
const mostrarCaixa2 = document.getElementById('caixa-freddy-maior-escondido');


function Box2() {

  mostrarCaixa2.style.display = 'block';
  mostrarMascara.style.visibility = "visible"




}


function janela2() {
  mostrarCaixa2.style.display = 'none';
  mostrarMascara.style.visibility = "hidden"

}





imagem2.addEventListener('click', () => {
  imagem2.style.display = 'none';
  video2.style.display = 'block';
  video2.play();
  setTimeout(() => {
    video2.style.display = 'none';
    video2.pause();
    imagem2.style.display = 'block';
  }, 1550);
  audio2.play();
});

const imagem3 = document.getElementById('foxyImagem');
const video3 = document.getElementById('jumpscareFoxy');
const audio3 = document.getElementById('musicaFoxy');
const mostrarCaixa3 = document.getElementById('caixa-foxy-maior-escondido');



function Box3() {

  mostrarCaixa3.style.display = "block"
  mostrarMascara.style.visibility = "visible"




}


function janela3() {
  mostrarCaixa3.style.display = "none"
  mostrarMascara.style.visibility = "hidden"

}


imagem3.addEventListener('click', () => {
  imagem3.style.display = 'none';
  video3.style.display = 'block';
  video3.play();
  setTimeout(() => {
    video3.style.display = 'none';
    video3.pause();
    imagem3.style.display = 'block';
  }, 2000);
  audio3.play();




});






const imagem4 = document.getElementById('chicaImagem');
const video4 = document.getElementById('jumpscareChica');
const mostrarCaixa4 = document.getElementById('caixa-chica-maior-escondido');


function Box4() {

  mostrarCaixa4.style.display = 'block';
  mostrarMascara.style.visibility = "visible"




}


function janela4() {
  mostrarCaixa4.style.display = 'none';
  mostrarMascara.style.visibility = "hidden"

}


imagem4.addEventListener('click', () => {
  imagem4.style.display = 'none';
  video4.style.display = 'block';
  video4.play();
  setTimeout(() => {
    video4.style.display = 'none';
    video4.pause();
    imagem4.style.display = 'block';
  }, 1550);
});



const imagem5 = document.getElementById('bonnieImagem');
const video5 = document.getElementById('jumpscareBonnie');
const mostrarCaixa5 = document.getElementById('caixa-bonnie-maior-escondido');



function Box5() {

  mostrarCaixa5.style.display = 'block';
  mostrarMascara.style.visibility = "visible"




}


function janela5() {
  mostrarCaixa5.style.display = 'none';
  mostrarMascara.style.visibility = "hidden"
}


imagem5.addEventListener('click', () => {
  imagem5.style.display = 'none';
  video5.style.display = 'block';
  video5.play();
  setTimeout(() => {
    video5.style.display = 'none';
    video5.pause();
    imagem5.style.display = 'block';
  }, 1550);
});