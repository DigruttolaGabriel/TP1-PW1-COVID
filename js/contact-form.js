function validarContacto() {
    var error = false;
    document.querySelectorAll('.error-form').forEach(function(a) { a.remove() });
    document.querySelectorAll('#mensaje-exito').forEach(function(a) { a.remove() });

    if (document.getElementById("input-nombre").value == '') {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-a")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("input-apellido").value == '') {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-b")[0].appendChild(campoRequerido);
        error = true;
    }

    var regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if (!regexEmail.test(document.getElementById("input-correo").value)) {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Ingrese un email válido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-c")[0].appendChild(campoRequerido);
        error = true;
    }

    if (!document.getElementById("input-telefono").value == '') {
        var regexTelefono = /^[0-9]{4}[-][0-9]{4}$/
        if (!regexTelefono.test(document.getElementById("input-telefono").value)) {
            var campoRequerido = document.createElement("p");
            campoRequerido.innerHTML = "Ingrese un teléfono válido";
            campoRequerido.style.color = "red";
            campoRequerido.classList.add("error-form");
            document.getElementsByClassName("campo-d")[0].appendChild(campoRequerido);
            error = true;
        }
    }
    return false;

}

function validarTextarea(obj) {
    document.getElementById("mensaje-consulta").innerHTML = obj.value.length + '/1000.';
}