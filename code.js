let VisibleMenu = false;
function mostrarOcultarMenu() {
  if (VisibleMenu) {
    document.getElementById("nav").classList = "";
    VisibleMenu = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    VisibleMenu = true;
  }
}
function seleccionar() {
  document.getElementById("nav").classList = "";
  VisibleMenu = false;
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("inglesE");
        habilidades[6].classList.add("inglesH");
        habilidades[7].classList.add("inglesEs");
        habilidades[8].classList.add("portuguesE");
        habilidades[9].classList.add("portuguesH");
        habilidades[10].classList.add("portuguesEs");
    }
}
window.onscroll = function(){
    efectoHabilidades();
}