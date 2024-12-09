import React, { useState } from "react";
import api from '../../api/axios';
import { clearToken, getToken } from '../../api/token';
import { useUser } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate
import Config from "./config/Config";
import "./Profile.css";

const Profile = () => {
  // api.get(`/routes/user`, {
  //   headers: {
  //     Authorization: `Bearer ${getToken}`
  //   }
  // }).then(response => {
  //   console.log(response.data.message);
  // })
  // .catch(error => {
  //     console.error('Protected route error:', error.response?.data || error.message);
  // });
  const { user, setUser } = useUser();
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate(); // Hook para navegação

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    navigate('/login');
};


  const handleGerenteProdutos = () => {
    navigate("/profile/anuncios/Anuncios.jsx"); // Redireciona para anúncios
  };

  return (
    <div className="profile-container">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          &lt; Voltar
        </Link>
      </div>

      <h1 className="profile-title">Meu perfil</h1>

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

      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-photo-container">
            <img
              src={user?.photo || "https://via.placeholder.com/150"}
              alt={`Foto de ${user?.name || "usuário"}`}
              className="profile-photo"
            />
            <p>Olá, <strong>{user?.name || "Usuário"}</strong></p>
          </div>

          {activeTab === "overview" ? (
            <div className="overview-options">
              <div className="option-container">
                <div className="option" />
                <div className="option-label">Preferências de estilo</div>
              </div>
              <div className="option-container">
                <div className="option"> {/* A caixa em si */} </div>
                <div className="option-label"><Link className="link-management" to='../management'>Gerenciamento de produtos</Link></div>
              </div>
              <div className="option-container">
                <div className="option" />
                <div className="option-label">Itens favoritos</div>
              </div>
            </div>
          ) : (
            <Config />
          )}
        </div>
      </div>

      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Profile;
