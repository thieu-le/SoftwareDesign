import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Routes>
          <Route path="/login" element={<Login onSubmit={handleLoginSubmit} onRegister={handleToggleForm} />} />
          <Route path="/register" element={<Register onSubmit={handleRegisterSubmit} onLogin={handleToggleForm} />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/" element={<div>Home Page</div>} /> {/* You might want to render something for the home page */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
