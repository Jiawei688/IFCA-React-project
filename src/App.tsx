
import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      {isLogin ? (
        <Login onToggleForm={toggleForm} />
      ) : (
        <Register onToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default App;