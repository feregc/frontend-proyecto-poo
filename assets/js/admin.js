var categoria = [
    {
        nombreCategoria: 'Administrar Empresas'
    },
    {
        nombreCategoria: 'Administrar Motoristas'
    },
    {
        nombreCategoria: 'Administrar Orden'
    }
]

function esconder() {
    document.getElementById('menuAdmin').classList.add("visible");
    document.getElementById('adminEmpresas').classList.add("visible");
    document.getElementById('adminMotoristas').classList.add("visible");
    document.getElementById('adminOrdenes').classList.add("visible");
}

esconder();
function abrirMenu(){
    document.getElementById('mainAdmin').classList.add("visible");
    document.getElementById('menuAdmin').classList.toggle("visible");
    document.getElementById('menuAdmin').innerHTML = 
    `
    <div id="menu">
        <input class="menuButton" type="button" onclick="mostrarAdmEmp()" value="Administrar Empresas">
        <input class="menuButton" type="button" onclick="mostrarAdmMot()" value="Administrar Motorista">
        <input class="menuButton" type="button" onclick="mostrarAsigOrd()" value="Asignar Orden">
    </div>

    `;
}
function mostrarAdmEmp(){
    document.getElementById('menuAdmin').classList.toggle("visible");
    document.getElementById('adminEmpresas').classList.toggle("visible");
    document.getElementById('adminEmpresas').innerHTML = 
    `
    <div class="titulo">
    <h3>Administrar Empresas</h3>
    <br>
    <h4>Empresas</h4>
    </div>
    <div class="container">
        <div id="empresasAdmin" class="row">
            <div class="col-12">
                <select class="form-select" multiple aria-label="multiple select example">
                    <option value="1">Empresa 1</option>
                    <option value="2">Empresa 2</option>
                    <option value="3">Empresa 3</option>
                </select>
            </div>
        </div>
    </div>
    <div class="abajo">
        <button class="buttonEmpresas float-end" data-bs-target="#agregarEmpresas" data-bs-toggle="modal">Agregar Empresa</button>
        <button class="buttonEmpresas float-end" data-bs-target="#editarEmpresa" data-bs-toggle="modal">Editar
            Empresa</button>
        <button class="buttonEmpresas float-end" data-bs-target="#eliminarEmpresa"
            data-bs-toggle="modal">Eliminar Empresa</button>
    </div>
    `;

}
function mostrarAdmMot(){
    document.getElementById('menuAdmin').classList.toggle("visible");
    document.getElementById('adminMotoristas').classList.toggle("visible");
    document.getElementById('adminMotoristas').innerHTML=
    `
    <div class="titulo">
    <h3>Administrar Motoristas</h3>
</div>
<div class="container">
    <div class="row" id="motoristas">
        <div class="col-2">
            <div class="card">
                <img src="assets/img/usuario.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Motorista 1</p>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="card">
                <img src="assets/img/usuario.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Motorista 2</p>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="card">
                <img src="assets/img/usuario.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Motorista 3</p>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="card">
                <img src="assets/img/usuario.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Motorista 4</p>
                </div>
            </div>
        </div>
        <div class="col-2">
            <div class="card">
                <img src="assets/img/usuario.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Motorista 5</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}
function mostrarAsigOrd(){
    document.getElementById('menuAdmin').classList.toggle("visible");
    document.getElementById('adminOrdenes').classList.toggle("visible");
    document.getElementById('adminOrdenes').innerHTML = 
    `
    <div class="titulo">
				<h3>Asignar Ordenes</h3>
				<br>
				<h4>Ordenes</h4>
			</div>
			<div class="container">
				<di class="row">
					<div class="col-12 overflow-auto">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th scope="col">No. Orden</th>
									<th scope="col">Estado</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Orden 1</th>
									<td>Entregada</td>
									<td><input type="button" value="Detalles"></td>
								</tr>
								<tr>
									<th scope="row">Orden 2</th>
									<td>Sin Entregar</td>
									<td><input type="button" value="Detalles"></td>
								</tr>
								<tr>
									<th scope="row">Orden 3</th>
									<td>En proceso</td>
									<td><input type="button" value="Detalles"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</di>
			</div>
    `;
}

function modalAgregarE(){
    $("#agregarEmpresas").show();
}
//Generar automaticamente las categorias
for (let i = 0; i < categoria.length; i++) {
    console.log(categoria[i].nombreCategoria);
}