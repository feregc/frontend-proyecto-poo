//JSON de categorias
var categoria = [
    {
        nombre:'Comida Rápida',
        comercio: [
            {
                nombreComercio:'Burger King HN',
                banner:'',
                logo:'assets/img/burgerking.jpg',
                descripcion:'HAMBURGUESAS - PAPAS - NUGGETS - DESAYUNOS',
                productos:[
                    {
                        nombreProducto:'',
                        imagen:'',
                        descripcionProducto:'',
                        precio:'',
                        cantidad:''
                    }
                ]
            }
        ]
    },
    {
        nombre:'Cafés y Panaderías',
        comercio: [
            {
                nombreComercio:'Cinnabon',
                banner:'',
                logo:'assets/img/cinnabon.jpg',
                descripcion:'CINNAMON ROLLS - CAFÉ',
                productos:[
                    {
                        nombreProducto:'',
                        imagen:'',
                        descripcionProducto:'',
                        precio:'',
                        cantidad:''
                    }
                ]
            }
        ]
    },
    {
        nombre:'Comida Gourmet',
        comercio: [
            {
                nombreComercio:'Ni-Fu Ni-Fa',
                banner:'',
                logo:'assets/img/nifunifa.jpg',
                descripcion:'CARNE - PARRILLADA - ARAGENTINA - CHORIZO',
                productos:[
                    {
                        nombreProducto:'',
                        imagen:'',
                        descripcionProducto:'',
                        precio:'',
                        cantidad:''
                    }
                ]
            }
        ]
    }
]


//función para mostrar secciones
function mostrarSeccion(seccion){
    document.getElementById('inicio').style.display = "block";

    document.getElementById(seccion).classList.toggle('visible');
    document.getElementById('inicio').style.display = "none";
}

//muestra las empresas de la categoria comida rápida
function mostrarComidas(){
    categoria.forEach(function (cat, indice){
        console.log(cat[indice]);
    });
}