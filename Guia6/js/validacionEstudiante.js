const formEstudiante = document.getElementById("idFormEstudiante");
const inputCarnet = document.getElementById("idTxtCarnet");
const inputNombreCompleto = document.getElementById("idTxtNombreCompleto");
const inputDui = document.getElementById("idTxtDui");
const inputNit = document.getElementById("idTxtNit");
const inputFechaNacimientoEstudiante = document.getElementById("idTxtFechaNacimientoEstudiante");
const inputCorreo = document.getElementById("idTxtCorreo");
const inputEdad = document.getElementById("idTxtEdad");
const containerResultadoValidacion = document.getElementById("idContainerResultadoValidacion");
const btnLimpiarEstudiante = document.getElementById("idBtnLimpiarEstudiante");

const expresiones = {
    carnet: /^[A-Z]{2}[0-9]{3}$/,
    nombreCompleto: /^[\p{L}]+(?:\s+[\p{L}]+)+$/u,
    dui: /^[0-9]{8}-[0-9]$/,
    nit: /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]$/,
    fecha: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    edad: /^[0-9]+$/,
};

const validarFecha = (fecha) => {
    if (!expresiones.fecha.test(fecha)) {
        return false;
    }
    const [dia, mes, anio] = fecha.split("/").map(Number);
    const fechaIngresada = new Date(anio, mes - 1, dia);
    return (
        fechaIngresada.getFullYear() === anio &&
        fechaIngresada.getMonth() === mes - 1 &&
        fechaIngresada.getDate() === dia
    );
};

const marcarCampo = (campo, valido) => {
    campo.classList.remove("is-valid", "is-invalid");
    campo.classList.add(valido ? "is-valid" : "is-invalid");
    return valido;
};

const validarFormulario = () => {
    const resultados = [];
    let formularioValido = true;

    const carnet = inputCarnet.value.trim().toUpperCase();
    const nombreCompleto = inputNombreCompleto.value.trim();
    const dui = inputDui.value.trim();
    const nit = inputNit.value.trim();
    const fechaNacimiento = inputFechaNacimientoEstudiante.value.trim();
    const correo = inputCorreo.value.trim();
    const edad = inputEdad.value.trim();

    const carnetValido = marcarCampo(inputCarnet, expresiones.carnet.test(carnet));
    const nombreValido = marcarCampo(inputNombreCompleto, expresiones.nombreCompleto.test(nombreCompleto));
    const duiValido = marcarCampo(inputDui, expresiones.dui.test(dui));
    const nitValido = marcarCampo(inputNit, expresiones.nit.test(nit));
    const fechaValida = marcarCampo(inputFechaNacimientoEstudiante, validarFecha(fechaNacimiento));
    const correoValido = marcarCampo(inputCorreo, expresiones.correo.test(correo));
    const edadValida = marcarCampo(inputEdad, expresiones.edad.test(edad));

    if (!carnetValido) {
        resultados.push("El carnet debe tener el formato AB001.");
        formularioValido = false;
    }
    if (!nombreValido) {
        resultados.push("El nombre completo solo debe contener letras y espacios.");
        formularioValido = false;
    }
    if (!duiValido) {
        resultados.push("El DUI debe tener el formato ########-#.");
        formularioValido = false;
    }
    if (!nitValido) {
        resultados.push("El NIT debe tener el formato ####-######-###-#.");
        formularioValido = false;
    }
    if (!fechaValida) {
        resultados.push("La fecha de nacimiento debe tener el formato dd/mm/aaaa.");
        formularioValido = false;
    }
    if (!correoValido) {
        resultados.push("El correo electrónico no es válido.");
        formularioValido = false;
    }
    if (!edadValida) {
        resultados.push("La edad solo debe contener números.");
        formularioValido = false;
    }

    if (formularioValido) {
        containerResultadoValidacion.innerHTML =
            '<div class="alert alert-success mb-0">Todos los datos son válidos.</div>';
    } else {
        containerResultadoValidacion.innerHTML =
            '<div class="alert alert-danger mb-0"><ul class="mb-0">' +
            resultados.map((resultado) => `<li>${resultado}</li>`).join("") +
            "</ul></div>";
    }
};

formEstudiante.addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario();
});

btnLimpiarEstudiante.addEventListener("click", () => {
    formEstudiante.reset();
    [
        inputCarnet,
        inputNombreCompleto,
        inputDui,
        inputNit,
        inputFechaNacimientoEstudiante,
        inputCorreo,
        inputEdad,
    ].forEach((campo) => campo.classList.remove("is-valid", "is-invalid"));
    containerResultadoValidacion.innerHTML = "Ninguno";
    inputCarnet.focus();
});
