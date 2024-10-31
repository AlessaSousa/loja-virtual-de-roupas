import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../src/components/HomePage/Login';
import Register from '../src/components/HomePage/Register';
import Header from './components/HomePage/Header';
import HomePage from './components/HomePage/HomePage';
import Itens from './components/HomePage/Itens';
import OnTrend from './components/HomePage/OnTrend';
import BestSellers from './components/HomePage/BestSellers';
import NewReleases from './components/HomePage/NewReleases';

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
          <Route path='/items' element={<Itens/>}/>
          <Route path='/onTrend' element={<OnTrend/>}/>
          <Route path='/bestSellers' element={<BestSellers/>}/>
          <Route path='newReleases' element={<NewReleases/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default PathRouter;
