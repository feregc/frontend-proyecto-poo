//JSON de categorias
var categoria = [
    {
        nombre: 'Comida Rápida',
        icono: 'fa-burger',
        comercio: [
            {
                nombreComercio: 'Burger King HN',
                banner: 'assets/img/banners/cr/bkb.jpg',
                logo: 'assets/img/logos/cr/burgerking.jpg',
                descripcion: 'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                horaAtencion: '7:00 AM - 9:00 PM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
                productos: [
                    {
                        nombreProducto: 'Whopper',
                        imagen: 'assets/img/productos/cr/bg/1.png',
                        descripcionProducto: 'res',
                        precio: 'L 219.00',
                        cantidad: ''
                    },
                    {
                        nombreProducto: 'king',
                        imagen: 'assets/img/productos/cr/bg/2.png',
                        descripcionProducto: 'pollo',
                        precio: 'L 169.00',
                        cantidad: ''
                    },
                    {
                        nombreProducto: 'Whopper',
                        imagen: 'assets/img/productos/cr/bg/1.png',
                        descripcionProducto: 'res',
                        precio: 'L 219.00',
                        cantidad: ''
                    },
                    {
                        nombreProducto: 'king',
                        imagen: 'assets/img/productos/cr/bg/2.png',
                        descripcionProducto: 'pollo',
                        precio: 'L 169.00',
                        cantidad: ''
                    }
                ]
            },
            {
                nombreComercio: 'Chilis',
                banner: 'assets/img/banners/cr/cb.jpg',
                logo: 'assets/img/logos/cr/chillis.jpg',
                descripcion: 'FAJITAS - HAMBURGUESAS - MARGARITAS - RIBS - CRISPERS',
                horaAtencion: '11:00 AM - 9:00 PM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
                productos: [
                    {
                        nombreProducto: 'Oldtimer Con Queso',
                        imagen: 'assets/img/productos/cr/ch/1.jpg',
                        descripcionProducto: 'queso, pepinillos',
                        precio: 'L. 299.00',
                        cantidad: ''
                    },
                    {
                        nombreProducto: 'Honey Chipotle Crispers',
                        imagen: 'assets/img/productos/cr/ch/2.png',
                        descripcionProducto: 'Filetes de pollo',
                        precio: 'L. 285.00',
                        cantidad: ''
                    }
                ]
            },
            {
                nombreComercio: 'Dominos',
                banner: 'assets/img/banners/cr/db.jpg',
                logo: 'assets/img/logos/cr/dominos.jpg',
                descripcion: 'PIZZA - PAN - ALITAS',
                horaAtencion: '8:00 AM - 9:00 PM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
                productos: [
                    {
                        nombreProducto: 'Cheese Pizza',
                        imagen: 'assets/img/productos/cr/do/1.jpg',
                        descripcionProducto: 'Pizza con queso',
                        precio: 'L 120.00',
                        cantidad: ''
                    },
                    {
                        nombreProducto: 'Deluze Pizza',
                        imagen: 'assets/img/productos/cr/do/2.jpg',
                        descripcionProducto: 'Pizza con todo',
                        precio: 'L 150.00',
                        cantidad: ''
                    }
                ]
            },
            {
                nombreComercio: 'Kentucky Fried Chicken',
                banner: 'assets/img/banners/cr/kfcb.jpg',
                logo: 'assets/img/logos/cr/kfc.jpg',
                descripcion: 'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                horaAtencion: '8:00 AM - 9:00 PM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
                productos: [
                    {
                        nombreProducto: 'K-Pack',
                        imagen: 'assets/img/productos/cr/kfc/1.png',
                        descripcionProducto: 'Pollo, biscuit, refresco',
                        precio: 'L 449.00',
                        cantidad: ''
                    },
                    {
                        nombreProducto: 'Big Box',
                        imagen: 'assets/img/productos/cr/kfc/2.png',
                        descripcionProducto: 'Pollo, Crunch, Papas',
                        precio: 'L 179.00',
                        cantidad: ''
                    }
                ]
            },
            {
                nombreComercio: 'Little Caesars',
                banner: 'assets/img/banners/cr/lcb.jpg',
                logo: 'assets/img/logos/cr/litllecaesars.jpg',
                descripcion: 'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                horaAtencion: '8:00 AM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
                productos: [
                    {
                        nombreProducto: '',
                        imagen: '',
                        descripcionProducto: '',
                        precio: '',
                        cantidad: ''
                    }
                ]
            },
            {
                nombreComercio: 'Pizza Hut',
                banner: 'assets/img/banners/cr/phb.jpg',
                logo: 'assets/img/logos/cr/pizzahut.jpg',
                descripcion: 'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                horaAtencion: '8:00 AM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
                productos: [
                    {
                        nombreProducto: '',
                        imagen: '',
                        descripcionProducto: '',
                        precio: '',
                        cantidad: ''
                    }
                ]
            },
            {
                nombreComercio: 'Popeyes',
                banner: 'assets/img/banners/cr/pb.jpg',
                logo: 'assets/img/logos/cr/popeyes.jpg',
                descripcion: 'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                horaAtencion: '8:00 AM',
                calificacion: '5.0',
                tiempoReparto: '30 min',
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
        icono: 'fa-mug-hot',
        comercio: [
            {
                nombreComercio: 'Cinnabon',
                banner: '',
                logo: 'assets/img/logos/cp/cinnabon.jpg',
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
            },
            {
                nombreComercio: 'Basilios',
                banner: '',
                logo: 'assets/img/logos/cp/basilios.jpg',
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
            },
            {
                nombreComercio: 'Churrin Churron',
                banner: '',
                logo: 'assets/img/logos/cp/churrin.jpg',
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
            },
            {
                nombreComercio: 'Dunkin Donuts',
                banner: '',
                logo: 'assets/img/logos/cp/donkin.jpg',
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
            },
            {
                nombreComercio: 'Espresso Americano',
                banner: '',
                logo: 'assets/img/logos/cp/espresso.jpg',
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
            },
            {
                nombreComercio: 'Pan y Más',
                banner: '',
                logo: 'assets/img/logos/cp/panymas.jpg',
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
            },
            {
                nombreComercio: 'Tutis',
                banner: '',
                logo: 'assets/img/logos/cp/tutis.jpg',
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
        icono: 'fa-utensils',
        comercio: [
            {
                nombreComercio: 'Ni-Fu Ni-Fa',
                banner: '',
                logo: 'assets/img/logos/cg/nifunifa.jpg',
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
    document.getElementById('comidasRapidas').classList.add("visible");
    document.getElementById('productos').classList.add("visible");
}

//muestra la pantalla de registro
function mostrarRegistro() {
    document.getElementById('inicio').classList.add("visible");
    document.getElementById('formulario1').classList.toggle("visible");
    document.getElementById('formulario1').innerHTML =
        `
    <div id="encabezado">
            <i id="atras" class="fa-solid fa-arrow-left fa-lg" onclick="atrasLP()"></i>
            <p class="parrafos">INGRESA TU TELÉFONO</p>
        </div>
        <div id="mensaje-registro">
            <p class="parrafos" style="color: #F12711; margin-bottom: 0.438rem;">Para iniciar, ingresa tu número de
                teléfono</p>
            <p class="parrafos" style="color: #F17264;">Te enviaremos un código de verificación</p>
        </div>
        <div id="formulario-registro">
            <input class="caja-texto" id="numero-cel" type="text" placeholder="Ingresa tu número">
            <div id="check">
                <input id="" type="checkbox" id="checkRegistro">
                <label for="checkRegistro"> He leído y acepto los terminos y condiciones</label>
            </div>
            <input class="boton boton-Rojo" id="recibeCodigo" type="button" value="RECIBIR CÓDIGO"
                onclick="mostrarFormReg()">
        </div>
    `;
}

//muestra el formulario de registro
function mostrarFormReg() {
    document.getElementById('formulario1').classList.toggle("visible");
    document.getElementById('formulario1-1').classList.toggle("visible");
    document.getElementById('formulario1-1').innerHTML =
        `
    <div id="encabezado">
            <i id="atras" class="fa-solid fa-arrow-left fa-lg" onclick="atrasLP2()"></i>
            <p class="parrafos">INGRESA TUS DATOS</p>
        </div>
        <div id="mensaje-registro">
            <p class="parrafos" style="color: #F12711; margin-bottom: 0.438rem;">¡Estamos a punto de terminar!</p>
        </div>
        <div id="formulario-registro-2">
            <input class="caja-texto caja" id="nombreCliente" type="text" placeholder="Nombre">
            <input class="caja-texto caja" id="apellidoCliente" type="text" placeholder="Apellido">
            <input class="caja-texto caja" id="correoCliente" type="email" placeholder="Correo electrónico">
            <input class="boton boton-Rojo" id="finalizar" type="button" value="TERMINAR" onclick="mostrarHome()">
        </div>
    `;
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
    document.getElementById('formulario2').innerHTML =
        `
    <div id="encabezado">
            <i id="atras" class="fa-solid fa-arrow-left fa-lg" onclick="atrasLP3()"></i>
            <p class="parrafos">INICIAR SESIÓN</p>
        </div>
        <div id="mensaje-registro">
            <p class="parrafos" style="color: #F12711; margin-bottom: 0.438rem;">Ingresa el número de
                teléfono</p>
            <p class="parrafos" style="color: #F17264;">asociado a la cuenta</p>
        </div>
        <div id="formulario-registro">
            <input class="caja-texto caja" id="numero-cel" type="text" placeholder="Ingresa tu número">
            <input class="boton boton-Rojo" id="recibeCodigo" type="button" value="RECIBIR CÓDIGO" onclick="mostrarHome2()">
        </div>
    `;
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
// function mostrarSeccion(seccion) {
//     document.getElementById('inicio').style.display = "block";
//     document.getElementById(seccion).classList.toggle('visible');
//     document.getElementById('inicio').style.display = "none";
// }

//Generar automaticamente las categorias
for (let i = 0; i < categoria.length; i++) {
    console.log(categoria);
    document.getElementById('categorias').innerHTML +=
        `
    <div class="categorias brand" onclick="mostrarComidas(${i})">
        <i class="fa-solid ${categoria[i].icono} fa-3x"></i>
        ${categoria[i].nombre}
    </div>
    `;
}

//función para mostrar comidas Rapidas
function mostrarComidas(index) {

    document.getElementById('home').style.display = "none";
    document.getElementById('comidasRapidas').style.display = "block"
    categoriasGolbal = index;
    let categoriaSeleccionada = categoria[index];
    var restaurantesCategoria = categoria[index].comercio;

    document.getElementById('categoriasheader').innerHTML +=
        `
        <div id="title" class="fixed-top">
        <i id="atras" class="fa-solid fa-arrow-left fa-lg" style="color: #F12711;"></i>
        <div id="encabezadoEmpresas">
            <p class="parrafos">${categoriaSeleccionada.nombre}</p>
            <input class="caja caja-texto" type="search" name="" id="" placeholder="Buscar">
        </div>
        </div>
        
    `;
    document.getElementById('comidas').innerHTML = '';
    for (let i = 0; i < restaurantesCategoria.length; i++) {
        console.log(restaurantesCategoria);
        document.getElementById('comidas').innerHTML +=
        `
        
            <div class="col-6">
            <div class="card" onclick="mostrarProductos(${i})">
                <img src=${restaurantesCategoria[i].logo} class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-title parrafos">${restaurantesCategoria[i].nombreComercio}<p>
                </div>
            </div>
        </div>
       
        `;
    }
    document.getElementById('footer').innerHTML =
        `
    <div class="fixed-bottom" id="barra-nav">
        <div>
            <i class="fa-solid fa-house fa-xl"></i>
        </div>
        <div>
            <i class="fa-solid fa-basket-shopping fa-xl"></i>
        </div>
        <div>
            <i class="fa-solid fa-user fa-xl"></i>
        </div>
    </div>
    `;
}
var categoriasGolbal = 0;
function mostrarProductos(index) {
    document.getElementById('comidasRapidas').style.display = "none"
    document.getElementById('productos').style.display = "block";
    let restaurantesCategoria = categoria[categoriasGolbal].comercio;
    let restaurante = restaurantesCategoria[index];
    let prod = restaurante.productos;

    document.getElementById('productos').innerHTML +=
        `
    <div id="productosHeader" class="fixed-top">
            <img class="rounded-circle position-fixed" src=${restaurante.logo} alt="">
            <img class="imgbanner" src=${restaurante.banner} alt="">
            <p class="parrafos tituloEmpresa">${restaurante.nombreComercio}</p>
            <p class="parrafos descripcionEmpresa">${restaurante.descripcion}</p>
            <div class="d-flex flex-row ms-4 infoEmpresas">
                <i class="fa-regular fa-clock me-2"></i>
                <p class="me-2 mb-0">${restaurante.horaAtencion}</p>
                <i class="fa-regular fa-star me-2"></i>
                <p class="me-2 mb-0">${restaurante.calificacion}</p>
                <i class="fa-solid fa-motorcycle me-2"></i>
                <p class="me-2 mb-0">${restaurante.tiempoReparto}</p>
            </div>
        </div>
        
    `;
    for (let i = 0; i < prod.length; i++) {
        console.log(prod);
        document.getElementById('cardProductos').innerHTML +=
            `
        <div class="col-6">
                        <div class="card mb-3">
                            <div class="row g-0">
                              <div class="col-md-4">
                                <img src=${prod[i].imagen} class="img-fluid rounded-start" alt="...">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h5 class="card-title">${prod[i].nombreProducto}</h5>
                                  <p class="card-text">${prod[i].descripcionProducto}</p>
                                  <p class="card-text"><small class="text-muted">${prod[i].precio}</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
        `;

    }
    document.getElementById('footer').innerHTML +=
        `
    <div class="fixed-bottom" id="barra-nav">
        <div>
            <i class="fa-solid fa-house fa-xl"></i>
        </div>
        <div>
            <i class="fa-solid fa-basket-shopping fa-xl"></i>
        </div>
        <div>
            <i class="fa-solid fa-user fa-xl"></i>
        </div>
    </div>
    `;

}