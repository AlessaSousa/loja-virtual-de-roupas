import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/components/HomePage/Login';
import Register from '../src/components/HomePage/Register';
import Header from './components/HomePage/Header';
import HomePage from './components/HomePage/HomePage';
import Items from './components/HomePage/Items';

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
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/items' element={<Items/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default PathRouter;
