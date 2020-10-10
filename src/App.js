import React, { useEffect, useState } from 'react';

import Routes from './routes';
import Login from './pages/Login';

function App() {
  const [userChecked, setUserChecked] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@leilao:token');
    if (token) {
      setUserLogged(true);
    }
    setUserChecked(true);
  }, []);

  function reloadApp() {
    window.location.reload();
  }

  if (!userChecked) return null;

  return userLogged ? <Routes /> : <Login reloadApp={reloadApp} />
}

export default App;
