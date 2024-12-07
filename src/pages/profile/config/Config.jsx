import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Config.css";

const Config = () => {
  const navigate = useNavigate(); 

  
  const goToPersonalInfo = () => navigate("/profile/infPessoais");
  const goToOrders = () => navigate("/profile/seus-pedidos");
  const goToProducts = () => navigate("/cibfi/anuncios/Anuncios.jsx");


  return (
    <div className="config-container">
      <div className="config-list">
        <div className="config-item" onClick={goToPersonalInfo}>
          <p>Informações Pessoais</p>
          <span className="arrow">{" >"}</span>
        </div>
        <div className="config-item" onClick={goToOrders}>
          <p>Seus Pedidos</p>
          <span className="arrow">{" >"}</span>
        </div>
        <div className="config-item" onClick={goToProducts}>
          <p>Produtos Anunciados</p>
          <span className="arrow">{" >"}</span>
        </div>
      </div>
    </div>
  );
};

export default Config;
