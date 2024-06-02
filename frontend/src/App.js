import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home'; // Asegúrate de que la ruta al componente Home sea correcta
import { AuthProvider } from './context/AuthContext'; // Asegúrate de que la ruta al AuthContext sea correcta
import ProtectedRoute from './componets/ProtectedRoute'; // Asegúrate de que la ruta al componente ProtectedRoute sea correcta

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute component={Home} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
