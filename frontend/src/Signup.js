import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import Validation from "./SignupValidation";
import axios from 'axios'
import backgroundImage from './img/regist.jpg'; 


function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate(); 
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values) //conexion de base de datos
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    };

    const estiloFondo = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '110vh',
        minWidth: "110vw",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return(
        <div className=  'd-flex justify-content-center align-items-center bg-primary vh-100' style={estiloFondo}  >
            <div className="col-md-3 vh-50 vw-75 p-5 rounded text-center" style={{ backgroundColor: 'transparent', border: '0.3px solid #000', borderRadius: '200px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 10px, rgba(0, 0, 0, 0.5) 100px 2px 25px' }}>
                <h1 className="text-center" style={{ color: '#ffffff', fontSize: '2rem', fontWeight: 'bold' }}>Crear Cuenta</h1>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="email"
                        style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <strong>Nombre</strong></label>
                        <input type="text" 
                        placeholder='Ingrea tu Nombre' 
                        name='name'
                        onChange={handleInput} 
                        className='form-control rounded-0'
                        style={{ 
                            background: 'linear-gradient(to right, #696969 15%, white 100%)', // Gradiente de dos colores
                            border: '1px solid #ccc', // Borde
                            borderRadius: '5px', // Borde redondeado
                            padding: '8px' // Espaciado interno
                        }}/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>


                    <div className='mb-3'>
                        <label htmlFor="email" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <strong>Correo electronico</strong></label>
                        <input type="email" 
                        placeholder='Ingrea tu correo' 
                        name='email'
                        onChange={handleInput} 
                        className='form-control rounded-0'
                        style={{ 
                            background: 'linear-gradient(to right, #696969 15%, white 100%)', // Gradiente de dos colores
                            border: '1px solid #ccc', // Borde
                            borderRadius: '5px', // Borde redondeado
                            padding: '8px' // Espaciado interno
                        }}/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>


                    <div className='mb-3'>
                        <label htmlFor="password" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <strong>Contraseña</strong></label>
                        <input type="password" 
                        placeholder='Ingrea tu contraseña' 
                        name='password'
                        onChange={handleInput} 
                        className='form-control rounded-0'
                        style={{ 
                            background: 'linear-gradient(to right, #696969 15%, white 100%)', // Gradiente de dos colores
                            border: '1px solid #ccc', // Borde
                            borderRadius: '5px', // Borde redondeado
                            padding: '8px' // Espaciado interno
                        }}/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    
                    <button type='submint' className='btn btn-success w-75 rounded-0'>Crear Cuenta</button>
                    <p>Acciones de rermas de politica</p>
                    <Link to="/" className='btn btn-default border w-50 bg-light rounded-0 text-docaration-none'>Ya tiene cuenta</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup