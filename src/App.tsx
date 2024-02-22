// App.tsx
import React from 'react';
import Login from './components/Login';

const App: React.FC = () => {
  const handleSubmit = (username: string, password: string) => {
    // Logic for handling login
  };

  const handleRegister = () => {
    // Logic for handling registration
  };

  return (
    <div className="App">
      <Login onSubmit={handleSubmit} onRegister={handleRegister} />
    </div>
  );
};

export default App;
