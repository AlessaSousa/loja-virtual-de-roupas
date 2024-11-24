import React from "react";
import oversized from "../assets/png/oversized.jpg";
import bolsa from "../assets/png/bolsa.jpg";
import sobretudo from "../assets/png/sobretudo.jpg";
import socialfem from "../assets/png/socialfem.jpg";
import cuidadoscompele from "../assets/png/cuidadoscompele.png";
import cuidadospessoais from "../assets/png/cuidadospessoais.png";
import sabaoembarra from "../assets/png/sabaoembarra.png";
import logo from "../assets/png/logo.png"; // Logo
import nossocatalogo from "../assets/png/nossocatalogo.png"; // Banner
import "./Catalog.css"; // Importação do CSS
import Reviews from "../homePage/reviews-customers/Reviews"; // Caminho do componente

// Importando as imagens de doações
import plantWorld from "../assets/svg/plant-world.svg";
import roupasDonation from "../assets/svg/roupas-donation.svg";
import imageEco from "../assets/svg/image-eco.svg";

// Dados dos produtos
const products = [
  { id: 1, name: "Oversized", image: oversized, price: 16.0 },
  { id: 2, name: "Bolsa", image: bolsa, price: 16.0 },
  { id: 3, name: "Sobretudo", image: sobretudo, price: 16.0 },
  { id: 4, name: "Social Feminino", image: socialfem, price: 16.0 },
  { id: 5, name: "Oversized", image: oversized, price: 16.0 },
  { id: 6, name: "Bolsa", image: bolsa, price: 16.0 },
  { id: 7, name: "Sobretudo", image: sobretudo, price: 16.0 },
  { id: 8, name: "Social Feminino", image: socialfem, price: 16.0 },
  { id: 9, name: "Oversized", image: oversized, price: 16.0 },
  { id: 10, name: "Bolsa", image: bolsa, price: 16.0 },
  { id: 11, name: "Sobretudo", image: sobretudo, price: 16.0 },
  { id: 12, name: "Social Feminino", image: socialfem, price: 16.0 },
];

const Catalog = () => {
  return (
    <div className="catalog-container">
      {/* Cabeçalho */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#catalogo" className="nav-link">Catálogo</a>
          <a href="#categorias" className="nav-link">Categorias</a>
          <input type="text" placeholder="Buscar..." className="search-bar" />
          <button className="signup-button">Cadastro</button>
        </nav>
      </header>

      {/* Banner */}
      <div className="banner-container">
        <img src={nossocatalogo} alt="Nosso Catálogo" className="banner" />
      </div>

      {/* Catálogo */}
      <h2>Catálogo</h2>
      <div className="catalog-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-info">
              <span className="product-price">R${product.price.toFixed(2)}</span>
              <button className="buy-button">Comprar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Outras Categorias - Agora em cima das seções de doações */}
      <div className="categories-text">
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          Explore mais opções nas nossas categorias abaixo
        </p>
      </div>
      <div className="other-categories">
        <h2>OUTRAS CATEGORIAS</h2>
        <div className="category-images">
          <div className="category-item">
            <img src={cuidadoscompele} alt="Cuidados com a pele" className="category-image" />
            <button className="category-button">Cuidados com a pele</button>
          </div>
          <div className="category-item">
            <img src={cuidadospessoais} alt="Cuidados pessoais" className="category-image" />
            <button className="category-button">Cuidados pessoais</button>
          </div>
          <div className="category-item">
            <img src={sabaoembarra} alt="Sabão em barra" className="category-image" />
            <button className="category-button">Sabão em barra</button>
          </div>
        </div>
      </div>

      {/* Seção de Doações */}
      <div className="container-cupom">
        <img className="image" src={plantWorld} alt="Plant World" />
        <p className="text-cupom">
          Cadastre-se agora e consiga um cupom de
          <br />
          20% de desconto em sua primeira compra.
        </p>
        <button className="button-cupom">Pegar cupom</button>
      </div>
      <div className="container-donation">
        <div>
          <img src={roupasDonation} alt="Roupas Donation" />
        </div>
        <div>
          <p className="title-donation">Conheça nossa área de doações de roupas</p>
          <p className="text-donation">
            Nosso site permite que você doe roupas que não irá mais usar.
            <br />
            As peças doadas serão destinadas a pessoas mais
            <br />
            necessitadas por todo o Brasil.
          </p>
          <button className="button-donation">Doe agora</button>
        </div>
      </div>

      <div className="container-eco">
        <div>
          <img src={imageEco} alt="Eco Image" />
        </div>
        <div>
          <p className="title-eco">
            A necessidade de produtos
            <br />
            ecológicos
          </p>
          <p className="text-eco">
            Até 2050, haverá mais plástico no mar do que peixes, o uso constante de
            <br />
            combustíveis fósseis para fazer nossos produtos está aumentando a
            <br />
            temperatura global, temos os maiores aterros sanitários já vistos, nossa
            <br />
            taxa de reciclagem é alarmantemente baixa. Essas estatísticas
            <br />
            perturbadoras são a razão pela qual pedimos que você mude para
            <br />
            produtos ecológicos e viva um estilo de vida mais sustentável. Nós da
            <br />
            Trendix imaginamos um mundo sem desperdício.
          </p>
        </div>
      </div>

      {/* Seção de Reviews */}
      <Reviews />

      {/* Rodapé */}
      <footer className="footer">
        <div className="links">
          <img src={logo} alt="Logo" />
          <p>Sobre nós</p>
          <p>Contate-nos</p>
          <p>Termos de serviço</p>
        </div>
        <div className="text-direitos">
          <p>Todos os direitos reservados &copy; 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
