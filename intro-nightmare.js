window.onload = function () {
  const musica = document.getElementById('music');
  const tra = document.getElementById('transição');
  const laught = document.getElementById('laught');

  tra.style.display = 'block';
  laught.play();

  setTimeout(() => {

    let opacidade = 1;
    const fadeOutInterval = setInterval(() => {
      opacidade -= 0.01;
      tra.style.opacity = opacidade;
      if (opacidade <= 0) {
        clearInterval(fadeOutInterval);
      }
    }, 10);

    setTimeout(() => {

      tra.style.display = 'none';

    }, 2000);

    musica.play();
  }, 2000);


};