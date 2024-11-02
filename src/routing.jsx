import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './homePage/login/Login';
import Register from './homePage/register/Register';
import HomePage from './homePage/homeMain/HomePage';

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
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PathRouter;
