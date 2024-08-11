
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";}
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);}


document.getElementById("antraste").addEventListener("mouseenter", mouseEnter);
document.getElementById("antraste").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {/*from  w ww.j  a  v a2s  . c o  m*/
    document.getElementById("antraste").style.color = "red";
}

function mouseLeave() {
    document.getElementById("antraste").style.color = "black";
}

function new_text()
{document.getElementById ('naudinga').innerHTML="Dėkojame už jūsų nuomonę."}
