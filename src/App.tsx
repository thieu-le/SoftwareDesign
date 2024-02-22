// App.tsx
import React from 'react';
import Login from './components/Login';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Here you can handle the login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <Login onSubmit={handleLogin} />
    </div>
  );
};

export default App;
