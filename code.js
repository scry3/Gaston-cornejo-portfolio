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
        habilidades[0].classList.add("git");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("html");
        habilidades[3].classList.add("css");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("java");
        habilidades[6].classList.add("sql");
        habilidades[7].classList.add("inglesE");
        habilidades[8].classList.add("inglesH");
        habilidades[9].classList.add("inglesEs");
        habilidades[10].classList.add("portuguesE");
        habilidades[11].classList.add("portuguesH");
        habilidades[12].classList.add("portuguesEs");
    }
}
window.onscroll = function(){
    efectoHabilidades();
}
