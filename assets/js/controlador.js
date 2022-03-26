//JSON de categorias
var categorias = {
    nombre:'Comida Rápida',
    empresas: {
        nombre:'empresa 1',
        banner:'',
        logo:'',
        descripcion:'',
        productos:{
            nombre:'',
            imagen:'',
            descripcion:'',
            precio:'',
            cantidad:'',
        }
    },
    nombre:'Cafés y Panaderías',
    empresas: {
        nombre:'empresa 1',
        banner:'',
        logo:'',
        descripcion:'',
        productos:{
            nombre:'',
            imagen:'',
            descripcion:'',
            precio:'',
            cantidad:'',
        }
    },
    nombre:'Comida Gourmet',
    empresas: {
        nombre:'empresa 1',
        banner:'',
        logo:'',
        descripcion:'',
        productos:{
            nombre:'',
            imagen:'',
            descripcion:'',
            precio:'',
            cantidad:'',
        }
    }
}

//función para mostrar secciones
function mostrarSeccion(seccion){
    document.getElementById('inicio').style.display = "block";

    document.getElementById(seccion).classList.toggle('visible');
    document.getElementById('inicio').style.display = "none";
}
