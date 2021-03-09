const listaIntrebari = document.getElementsByClassName("lista-accordion");
let i;

for (i = 0; i < listaIntrebari.length; i++) {
  listaIntrebari[i].addEventListener("click", function(){
    this.classList.toggle("active");

    const raspuns = this.nextElementSibling;
    if (raspuns.style.display === "block") {
      raspuns.style.display = "none";
    } else {
      raspuns.style.display = "block";
    }
  });
}
