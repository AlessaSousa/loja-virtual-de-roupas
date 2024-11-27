import React from "react";
import "./Config.css";

const Config = () => {
  return (
    <div className="config-container">
      <div className="config-list">
        <div className="config-item">
          <p>Informações Pessoais</p>
          <span className="arrow">{" >"}</span>
        </div>
        <div className="config-item">
          <p>Seus Pedidos</p>
          <span className="arrow">{" >"}</span>
        </div>
        <div className="config-item">
          <p>Produtos Anunciados</p>
          <span className="arrow">{" >"}</span>
        </div>
        <div className="config-item">
          <p>Política e Privacidade</p>
          <span className="arrow">{" >"}</span>
        </div>
        <div className="config-item">
          <p>Localização e Idioma</p>
          <span className="arrow">{" >"}</span>
        </div>
      </div>
    </div>
  );
};

export default Config;
