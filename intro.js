const avançar = document.querySelector(".jumpscare-warning");
const introVideo = document.getElementById('introVideo');
const audio1 = document.getElementById('scream');
// const musica = document.getElementById('music');

function prosseguir() {

    avançar.style.display = "none"
    audio1.play();
    introVideo.style.display = 'block';
    introVideo.play();

    setTimeout(() => {
        introVideo.style.opacity = '0'


        // musica.play();

        setTimeout(() => {

            introVideo.style.display = 'none';

        }, 2000);


    }, 500);




}






















































// const musica = document.getElementById('music');


// setTimeout(() => {


//     introVideo.style.display = 'block';
//     audio.play();


// }, 6000);

// setTimeout(() => {
//     musica.play();
//     introVideo.style.opacity = '0';

//     introVideo.style.display = 'none';



// }, 7000);










// document.addEventListener('DOMContentLoaded', function() {
//     const introVideo = document.getElementById('introVideo');




//     introVideo.addEventListener('ended', function() {
//         // Inicia o fade out ao alterar a opacidade
//         introVideo.style.opacity = '0';

//         // Após a transição terminar, o vídeo é ocultado ou removido
//         setTimeout(() => {
//             introVideo.style.display = 'none';
//             // Ou, se preferir remover o vídeo do DOM:
//             // videoContainer.remove();
//         }, 2000); // O tempo aqui deve coincidir com o tempo de transição (2 segundos)



//         })
//     })






