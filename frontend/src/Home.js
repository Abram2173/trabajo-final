import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext'; // Asegúrate de que la ruta al AuthContext sea correcta
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
