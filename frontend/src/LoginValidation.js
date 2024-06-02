const Validation = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "El correo electrónico no es válido";
    }

    if (!values.password) {
        errors.password = "La contraseña es obligatoria";
    } else if (values.password.length < 6) {
        errors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    return errors;
};

export default Validation;
