// Login.tsx
import React, { useState } from 'react';

interface LoginProps {
  onSubmit: (username: string, password: string) => void;
  onRegister: () => void; // New property for the register function
}

const Login: React.FC<LoginProps> = ({ onSubmit, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" onClick={onRegister}>Register</button> {/* Button to trigger the register function */}
      </form>
    </div>
  );
};

export default Login;
