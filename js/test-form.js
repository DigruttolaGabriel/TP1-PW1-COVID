function validarTest() {
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

    if (document.getElementById("input-dni").value == '') {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-b")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("input-telefono").value == '') {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-c")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("fiebre-si").checked == false && document.getElementById("fiebre-no").checked == false) {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-h")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("cabeza-si").checked == false && document.getElementById("cabeza-no").checked == false) {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-i")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("tos-si").checked == false && document.getElementById("tos-no").checked == false) {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-j")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("garganta-si").checked == false && document.getElementById("garganta-no").checked == false) {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-k")[0].appendChild(campoRequerido);
        error = true;
    }

    if (document.getElementById("respirar-si").checked == false && document.getElementById("respirar-no").checked == false) {
        var campoRequerido = document.createElement("p");
        campoRequerido.innerHTML = "Campo requerido";
        campoRequerido.style.color = "red";
        campoRequerido.classList.add("error-form");
        document.getElementsByClassName("campo-l")[0].appendChild(campoRequerido);
        error = true;
    }

    if (!error) {
        var sintomas = 0;
        document.querySelectorAll(".respuesta-si").forEach(function(a) {
            if (a.checked) {
                sintomas++;
            }
        });

        var mensajeExito = document.createElement("p");
        mensajeExito.innerHTML = "El formulario fue completado correctamente. " + sintomas + " síntomas de COVID-19 fueron registrados.";
        mensajeExito.style.color = "white";
        mensajeExito.style.backgroundColor = "green";
        mensajeExito.style.padding = "10px";
        mensajeExito.style.textAlign = "center";
        mensajeExito.id = "mensaje-exito";

        document.getElementsByClassName("formulario-test-enfermedad")[0].appendChild(mensajeExito);

    }

    return false;

}

function selectPaises() {
    if (document.getElementById("viajado-si").checked) {
        document.getElementsByClassName("campo-g")[0].style.display = "inline-block";
    } else {
        document.getElementsByClassName("campo-g")[0].style.display = "none";
    }
}

function radioRespirar() {
    if (document.getElementById("respirar-si").checked) {
        document.getElementsByClassName("campo-m")[0].style.display = "inline-block";
    } else {
        document.getElementsByClassName("campo-m")[0].style.display = "none";
    }
}