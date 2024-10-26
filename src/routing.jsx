import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/components/HomePage/Login';
import Register from '../src/components/HomePage/Register';
import HomePage from '../src/components/HomePage/HomePage';


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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default PathRouter;
