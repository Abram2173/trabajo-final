import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Validation from './LoginValidation';
import backgroundImage from './asserts/loginFO.jpg';
import usuarioImg from './img/usuario.png';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                login(); // Llama a la función de inicio de sesión del contexto
                navigate('/home'); // Redirige a la página de inicio
            }, 2000);
        }
    };

    const estiloFondo = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: "110vw",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={estiloFondo} >
            <div className="col-md-3 vh-50 vw-75 p-5 rounded text-center" style={{ backgroundColor: 'transparent', border: '0.3px solid #000', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 10px, rgba(0, 0, 0, 0.5) 0px 1px 15px' }} >
                <img src={usuarioImg} alt="Logo" className="img-fluid mb-4" style={{ maxWidth: '110px', maxHeight: '100px' }} />
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email" className="text-center" style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            <strong style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 'bold' }}>Correo electrónicos</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Ingresa tu correo'
                            name='email'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="text-center" style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            <strong style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 'bold' }}>Contraseña</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Ingresa tu contraseña'
                            name='password'
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button
                        type="submit"
                        className={`text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700 ${isLoading ? 'animate-pulse' : ''}`}
                        style={{
                            fontSize: '1.2rem',
                            padding: '1rem 2.5rem',
                            border: 'none',
                            outline: 'none',
                            borderRadius: '0.0rem',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            transition: '0.6s',
                            WebkitBoxReflect: 'below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.0))',
                        }}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
                    </button>
                    <p>Acciones de términos de política</p>
                    <Link to="/signup" className="btn btn-default border w-50 text-decoration-none" style={{
                        backgroundColor: 'black',
                        color: 'ghostwhite',
                        borderRadius: '100',
                        marginTop: '10px',
                    }}>Crear Cuenta</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
