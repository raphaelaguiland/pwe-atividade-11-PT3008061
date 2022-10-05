let slideIndex = 1;
mostraSlides(slideIndex);

function botaoSlides(n) {
  mostraSlides(slideIndex += n);
}

function atualSlide(n) {
  mostraSlides(slideIndex = n);
}

function mostraSlides(item) {
  let i;
  let slides = document.getElementsByClassName("secao__carrossel__lista__item");
  let indicador = document.getElementsByClassName("secao__carrossel__conteiner-indicadores__indicador");
  
  if (item > slides.length) {
    slideIndex = 1
  }
  
  if (item < 1) {
    slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < indicador.length; i++) {
    indicador[i].className = indicador[i].className.replace(" ativo", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  indicador[slideIndex-1].className += " ativo";
}