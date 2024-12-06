import { useLayoutEffect } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomePage from "./pages/homePage/HomePage";
import Sobre from "./pages/sobre/Sobre";
import Catalog from "./pages/catalogo/Catalog";
import Profile from "./pages/profile/Profile";
import Carrinho from "./pages/carrinho/Carrinho";
import Pagamentos from "./pages/pagamentos/Pagamentos";
import InfPessoais from "./pages/profile/config/informacoesPessoais/InfPessoais";
import Anuncios from "./pages/profile/config/anuncios/Anuncios"
import { UserProvider } from "./context/userContext";
import { CarrinhoProvider } from "./context/carrinhoContext";
import Management from "./pages/profile/management/Management";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const PathRouter = () => {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <ScrollToTop />
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/pagamentos" element={<Pagamentos />} />
            <Route path="/profile/informacoes-pessoais" element={<InfPessoais />} />
            <Route path="/anuncios" element={<Anuncios />} />
            <Route path='/management' element={<Management/>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </CarrinhoProvider>
  );
};

export default PathRouter;
