import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import HomePage from './pages/homeMain/HomePage';
import Sobre from './pages/sobre/sobre';
import Catalogo from './pages/catalogo/Catalogo';
import { UserProvider } from './context/userContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const PathRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default PathRouter;
