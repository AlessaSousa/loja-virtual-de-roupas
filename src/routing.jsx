import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './homePage/login/Login';
import Register from './homePage/register/Register';
import HomePage from './homePage/homeMain/HomePage';
import Sobre from './homePage/sobre/sobre';
import { UserProvider } from './context/userContext';
import Catalog from './homePage/catalogo/Catalog';
import Carrinho from './homePage/carrinho/Carrinho';
import Pagamentos from './homePage/pagamentos/pagamentos';

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
          <Route path='/catalago' element={<Catalog/>}/>
          <Route path='/carrinho' element={<Carrinho/>}/>
          <Route path='/pagamentos' element={<Pagamentos/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default PathRouter;
