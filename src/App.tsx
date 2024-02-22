import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import ProfileForm from './components/ProfileForm';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (username: string, password: string) => {
    // Logic for handling login
  };

  const handleRegisterSubmit = (username: string, password: string) => {
    // Logic for handling registration
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onSubmit={handleLoginSubmit} onRegister={handleToggleForm} />} />
        <Route path="/register" element={<Register onSubmit={handleRegisterSubmit} onLogin={handleToggleForm} />} />
        <Route path="/" element={<ProfileForm />} />
      </Routes>
    </div>
  );
};

export default App;
