const imagem6 = document.getElementById('logoFnaf');
const video6 = document.getElementById ('jumpscareGolden');
const audio6 = document.getElementById ('audioGolden');
const mostrarCaixa6 = document.querySelector('.caixa-golden');
const fecharJanela6 = document.querySelector('.caixa-golden');



function Box6() {
  
  mostrarCaixa6.style.visibility = "visible"
  mostrarMascara.style.visibility = "visible"
  
  
  
  
}


function janela6() {
  fecharJanela6.style.display = "none"
  esconderMascara.style.visibility = "hidden"
  

}






imagem6.addEventListener('click', () => {
    imagem6.style.display = 'none';
    video6.style.display = 'block';
    video6.play();
    setTimeout(() => {
        video6.style.display = 'none';
        video6.pause();
        imagem6.style.display = 'block';
    } , 2000);
    audio6.play();

});






const imagem = document.getElementById('minhaImagem');
const video = document.getElementById('jumpscareAfton');
const audio = document.getElementById('audioAfton');
const mostrarCaixa = document.querySelector('.caixa-william-maior');
const fecharJanela = document.querySelector('.caixa-william-maior');



function Box() {
  
  mostrarCaixa.style.visibility ="visible"
  mostrarMascara.style.visibility = "visible"

  
  
  
  
}


function janela() {
  fecharJanela.style.display = "none"
  esconderMascara.style.visibility = "hidden"

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
const esconderCaixa2 = document.querySelector('.caixa-freddy');
const mostrarCaixa2 = document.querySelector('.caixa-freddy-maior');
const fecharJanela2 = document.querySelector('.caixa-freddy-maior');


function Box2() {
  
  mostrarCaixa2.style.visibility ="visible"
  mostrarMascara.style.visibility = "visible"
  
  
  
  
}


function janela2() {
  fecharJanela2.style.display = "none"
  esconderMascara.style.visibility = "hidden"

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
const esconderCaixa3 = document.querySelector('.caixa-foxy');
const mostrarCaixa3 = document.querySelector('.caixa-foxy-maior');
const fecharJanela3 = document.querySelector('.caixa-foxy-maior');


function Box3() {
  
  mostrarCaixa3.style.visibility ="visible"
  mostrarMascara.style.visibility = "visible"
  
  
  
  
}


function janela3() {
  fecharJanela3.style.display = "none"
  esconderMascara.style.visibility = "hidden"

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
const esconderCaixa4 = document.querySelector('.caixa-chica');
const mostrarCaixa4 = document.querySelector('.caixa-chica-maior');
const fecharJanela4 = document.querySelector('.caixa-chica-maior');


function Box4() {
  
  mostrarCaixa4.style.visibility ="visible"
  mostrarMascara.style.visibility = "visible"
  
  
  
  
}


function janela4() {
  fecharJanela4.style.display = "none"
  esconderMascara.style.visibility = "hidden"

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
const esconderCaixa5 = document.querySelector('.caixa-bonnie');
const mostrarCaixa5 = document.querySelector('.caixa-bonnie-maior');
const fecharJanela5 = document.querySelector('.caixa-bonnie-maior');


function Box5() {
  
  mostrarCaixa5.style.visibility ="visible"
  mostrarMascara.style.visibility = "visible"
  
  
  
  
}


function janela5() {
  fecharJanela5.style.display = "none"
  esconderMascara.style.visibility = "hidden"
  

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

const mostrarMascara = document.querySelector('.mascara-2');
const esconderMascara = document.querySelector('.mascara-2');








