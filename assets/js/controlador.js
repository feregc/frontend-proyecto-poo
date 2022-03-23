function mostrarSeccion(seccion){
    document.getElementById('inicio').style.display = "block";

    document.getElementById(seccion).classList.toggle('visible');
    document.getElementById('inicio').style.display = "none";
}
