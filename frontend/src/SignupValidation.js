// src/SignupValidation.js
function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
        error.name = "El Nombre no debe estar vacío";
    } else {
        error.name = "";
    }

    if (values.email === "") {
        error.email = "El correo electrónico no debe estar vacío";
    } else if (!email_pattern.test(values.email)) {
        error.email = "El correo electrónico no es válido";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "La contraseña no debe estar vacía";
    } else if (!password_pattern.test(values.password)) {
        error.password = "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula y un número";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
