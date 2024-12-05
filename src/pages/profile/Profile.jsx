import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import { Link } from "react-router-dom";
import Config from "./config/Config";
import "./Profile.css";

const Profile = () => {
  const { user, setUser } = useUser();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    setUser(null); // Desloga o usuário
  };

  return (
    <div className="profile-container">
      {/* Botão Voltar */}
      <div className="back-button-container">
        <Link to="/" className="back-button">
          &lt; Voltar
        </Link>
      </div>

      {/* Título */}
      <h1 className="profile-title">Meu perfil</h1>

      {/* Seletor de abas */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Visão geral
        </button>
        <button
          className={`tab ${activeTab === "config" ? "active" : ""}`}
          onClick={() => setActiveTab("config")}
        >
          Configurações
        </button>
      </div>

      {/* Container do perfil e informações */}
      <div className="profile-content">
        <div className="profile-info">
          
          {/* Foto e Olá, {user.name} */}
          <div className="profile-photo-container">
            <img
              src={user?.photo || "https://via.placeholder.com/150"}
              alt={`Foto de ${user?.name || "usuário"}`}
              className="profile-photo"
            />
            <p>Olá, <strong>{user?.name || "Usuário"}</strong></p>
          </div>

          {/* Lista de configurações ou visão geral */}
          {activeTab === "overview" ? (
            <div className="overview-options">
              <div className="option-container">
                <div className="option"> {/* A caixa em si */} </div>
                <div className="option-label">Preferências de estilo</div>
              </div>
              <div className="option-container">
                <div className="option"> {/* A caixa em si */} </div>
                <div className="option-label"><Link className="link-management" to='/management'>Gerenciamento de produtos</Link></div>
              </div>
              <div className="option-container">
                <div className="option"> {/* A caixa em si */} </div>
                <div className="option-label">Itens favoritos</div>
              </div>
            </div>
          ) : (
            <Config />
          )}
        </div>
      </div>

      {/* Botão de logout */}
      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Profile;
