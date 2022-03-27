//JSON de categorias
var categoria = [
    {
        nombre: 'Comida Rápida',
        comercio: [
            {
                nombreComercio: 'Burger King HN',
                banner: '',
                logo: 'assets/img/burgerking.jpg',
                descripcion: 'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                productos: [
                    {
                        nombreProducto: '',
                        imagen: '',
                        descripcionProducto: '',
                        precio: '',
                        cantidad: ''
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Cafés y Panaderías',
        comercio: [
            {
                nombreComercio: 'Cinnabon',
                banner: '',
                logo: 'assets/img/cinnabon.jpg',
                descripcion: 'CINNAMON ROLLS - CAFÉ',
                productos: [
                    {
                        nombreProducto: '',
                        imagen: '',
                        descripcionProducto: '',
                        precio: '',
                        cantidad: ''
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Comida Gourmet',
        comercio: [
            {
                nombreComercio: 'Ni-Fu Ni-Fa',
                banner: '',
                logo: 'assets/img/nifunifa.jpg',
                descripcion: 'CARNE - PARRILLADA - ARAGENTINA - CHORIZO',
                productos: [
                    {
                        nombreProducto: '',
                        imagen: '',
                        descripcionProducto: '',
                        precio: '',
                        cantidad: ''
                    }
                ]
            }
        ]
    }
]

//hace que los elementos nmo estén visibles
function esconder() {
    document.getElementById('formulario1').classList.add("visible");
    document.getElementById('formulario1-1').classList.add("visible");
    document.getElementById('formulario2').classList.add("visible");
    document.getElementById('home').classList.add("visible");
    document.getElementById('comidasRapidas').classList.add("visible")
}

//muestra la pantalla de registro
function mostrarRegistro() {
    document.getElementById('inicio').classList.add("visible");
    document.getElementById('formulario1').classList.toggle("visible");
}

//muestra el formulario de registro
function mostrarFormReg() {
    document.getElementById('formulario1').classList.toggle("visible");
    document.getElementById('formulario1-1').classList.toggle("visible");
}

//mostrar home
function mostrarHome() {
    document.getElementById('formulario1-1').classList.toggle("visible");
    document.getElementById('home').classList.toggle("visible");
}

//mostrar pantalla inmicio de sesion
function mostrarLogIn() {
    document.getElementById('inicio').classList.add("visible");
    document.getElementById('formulario2').classList.toggle("visible");
}

//mostrar home
function mostrarHome2() {
    document.getElementById('formulario2').classList.toggle("visible");
    document.getElementById('home').classList.toggle("visible");
}

//funcion para retroceder 
function atrasLP() {
    document.getElementById('formulario1').classList.toggle("visible");
    document.getElementById('inicio').classList.toggle("visible");
}

//funcion para retroceder 
function atrasLP2() {
    document.getElementById('formulario1').classList.toggle("visible");
    document.getElementById('formulario1-1').classList.toggle("visible");
}

function atrasLP3() {
    document.getElementById('formulario2').classList.toggle("visible");
    document.getElementById('inicio').classList.toggle("visible");
}

//función para mostrar secciones
function mostrarSeccion(seccion){
    document.getElementById('inicio').style.display = "block";

    document.getElementById(seccion).classList.toggle('visible');
    document.getElementById('inicio').style.display = "none";
}



//función para mostrar comidas Rapidas
function mostrarComidas() {
    document.getElementById('comidasRapidas').innerHTML = '';
    document.getElementById('home').style.display = "none";
    document.getElementById('comidasRapidas').classList.toggle("visible")
    let cr = categoria[0];
    console.log(cr)
    document.getElementById('comidasRapidas').innerHTML +=
        `
        <i id="atras" class="fa-solid fa-arrow-left fa-lg" style="color: #F12711;"></i>
        <div id="encabezadoEmpresas">
            <p class="parrafos">${cr.nombre}</p>
            <input class="caja caja-texto" type="search" name="" id="" placeholder="Buscar">
        </div>
        `;
    categoria.forEach(function (cat){
        console.log(cat.nombre);
    });

}