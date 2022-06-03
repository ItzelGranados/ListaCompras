let contador = 0;
let costoTotal = 0;
let totalEnProductos = 0;
let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let agregar = document.getElementById("btnAgregar");


//Función para validar el nombre
function validarNombre() {
    if (txtNombre.value.length < 3) {
        return false;
    } //if
    return true;
} //validar nombre


//Función para validad cantidad
function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    } // if
    if (isNaN(txtNumber.value)) {
        return false;
    } //if

    if (parseFloat(txtNumber.value) <= 0) {
        return false;
    } //if
    return true;
} //validar cantidad



agregar.addEventListener("click", (event) => {
    event.preventDefault();
    if ((!validarNombre()) || (!validarCantidad())) {
        let lista = "";
        if (!validarNombre()) {
            txtNombre.style.border = "red thin solid";
            lista += "<li>Escribir nombre válido</li>";
        } //if
        if (!validarCantidad()) {
            txtNumber.style.border = "red thin solid";
            lista += "<li>Escribir cantidad válida </li>";
        } //if 

        document.getElementById("alertValidacionesTexto").innerHTML =
            `Los campos deben ser llenados correctamente.
            <ul>${lista} </ul>
            `;
        document.getElementById("alertValidaciones").style.display = "block"

        setTimeout(function() {
                document.getElementById("alertValidaciones").style.display = "none";
            },
            5000
        ); //functionTimeOut
        return false;
    } //if



    txtNumber.style.border = "";
    txtNombre.style.border = "";
    document.getElementById("alertValidaciones").style.display = "none";
    contador++;
    document.getElementById("contadorProductos").innerHTML = contador;
    localStorage.setItem("contadorProductos", contador);
    let precio = (Math.floor((Math.random() * 50) * 100)) / 100;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += Math.ceil(cantidad);
    document.getElementById("productosTotal").innerHTML = totalEnProductos;
    localStorage.setItem("productosTotal", totalEnProductos);
    costoTotal += (precio * cantidad);
    total.innerHTML = `$ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("precioTotal", costoTotal.toFixed(2));



    let tmp = `<tr>
        <th scope="row">${contador}</th>
        <td>${txtNombre.value}</td>
        <td>${txtNumber.value}</td>
        <td>$ ${precio}</td>
        </tr>`;
    cuerpoTabla[0].innerHTML += tmp;
    txtNumber.value = "";
    txtNombre.value = "";
    txtNombre.focus();

});




txtNombre.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();
});

txtNumber.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();
});



window.addEventListener("load", function() {
    if (localStorage.getItem("contadorProductos") != null) {
        contador = parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductos").innerHTML = contador;
    } //if contadorProductos
    if (localStorage.getItem("productosTotal")) {
        totalEnProductos = parseInt(localStorage.getItem("productosTotal"));
        document.getElementById("productosTotal").innerHTML = totalEnProductos;
    } //if productosTotal
    if (localStorage.getItem("precioTotal")) {
        costoTotal = parseInt(localStorage.getItem("precioTotal"));
        total.innerHTML = costoTotal;
    } //if precioTotal
});