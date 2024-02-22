import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

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
      {isLogin ? (
        <Login onSubmit={handleLoginSubmit} onRegister={handleToggleForm} />
      ) : (
        <Register onSubmit={handleRegisterSubmit} onLogin={handleToggleForm} />
      )}
    </div>
  );
};

export default App;
