let contador = 0;
let costoTotal = 0;
let totalEnProductos = 0;
let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en Precio";
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let agregar = document.getElementById("btnAgregar");

//tableListaCompras
let tabla = document.getElementById("tableListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");



//txtNombre.value = "Leche Semidescremada";
//console.log(txtNombre.value);
/*let campos = document.getElementsByClassName("campo");
campos[0].value = "Leche descremada deslactosada light=Agua";
console.log(campos[0].value);
console.log(campos);
for (let i = 0; i < campos.length; i++) {
    campos[i].style.border = "red thin solid ";
} //for
let spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].textContent);
}*/ //for i

/*cuerpoTabla[0].innerHTML = `<tr>

<th scope="row">1</th>
<td>Leche descremada</td>
<td>1</td>
<td>$ 23.50</td>
</tr> `;*/


function validarNombre() {
    if (txtNombre.value.length < 3) {
        return false;
    } //if
    return true;
} //valida nombre 



function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false;
    }
    if (parseFloat(txtNumber.value) <= 0) {
        return false;
    } //if
    return true;
} //validar cantidad


agregar.addEventListener("click", (event) => {
    event.preventDefault();

    if ((!validarNombre()) || (!validarCantidad())) {
        document.getElementById("alertValidacionesTexto").innerHTML = "Los campos deben ser llenados correctamente";
        document.getElementById("alertValidaciones").style.display = "block";
        if (!validarNombre()) {
            txtNombre.style.border = "red thin solid";
        } //
        if (!validarCantidad()) {
            txtNumber.style.border = "red thin solid";
        }

        setTimeout(function() {
                document.getElementById("alertValidaciones").style.display = "none";
            },
            3000
        );

        return false;
    }

    txtNumber.style.border = "";
    txtNombre.style.border = "";

    document.getElementById("alertValidaciones").style.display = "none";
    contador++;
    document.getElementById("contadorProductos").innerHTML = contador;
    window.localStorage.setItem("contadorProductos", contador);
    let precio = (Math.floor((Math.random() * 50) * 100)) / 100;
    let cantidad = parseFloat(txtNumber.value);

    totalEnProductos = Math.ceil(cantidad);
    document.getElementById("productosTotal").innerHTML = totalEnProductos;
    window.localStorage.setItem("productosTotal", totalEnProductos);
    costoTotal += (precio * cantidad);
    total.innerHTML = ` $ ${costoTotal.toFixed(2)}`;
    localStorage.setItem("precioTotal", costoTotal.toFixed(2));

    let tmp = `<tr>

    <th.scope="row">${contador}</th>
    <th scope="row">1</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>${precio}</td>
    </tr> `

    console.log(tmp);
    cuerpoTabla[0].innerHTML += tmp;
    txtNombre.value = "";
    txtNumber.value = "";
    txtNombre.focus();

    console.log(txtNombre.value, txtNumber.value);

});

txtNombre.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();
})

txtNumber.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();
})

window.addEventListener("load", function() {

        if (localStorage.getItem("contadorProductos") != null) {
            contador = parseInt(localStorage.getItem("contador productos"));
            document.getElementById("contadorProductos").innerHTML = contador;
        } //if contadorProductos

        if (localStorage.getItem("precioTotal") != null) {
            costoTotal = parseFloat(localStorage.getItem("precioTotal"));
            total.innerHTML = costoTotal;
        } //if precio Total

        if (localStorage.getItem("productosTotal")) {
            totalEnProductos = parseInt(localStorage.getItem("productosTotal"));
            document.getElementById("productosTotal").innerHTML = totalEnProductos;
        } //if productosTotal

    }

);