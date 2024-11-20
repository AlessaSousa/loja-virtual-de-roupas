// import React, { useState } from 'react';
import './Carrinho.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import sobretudoBege from '../../assets/svg/sobretudo-bege.svg';
// import cuidadoscompele from '../../assets/png/cuidadoscompele.png';
// import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg';
// import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg';
// import sabaoembarra from '../../assets/png/sabaoembarra.png';
import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/carrinhoContext'

const Carrinho = () => {

    const { carrinho = [], removerDoCarrinho } = useCarrinho();
    const total = Array.isArray(carrinho)
    ? carrinho.reduce((acc, item) => acc + (item.value * item.quantidade || 0), 0).toFixed(2)
    : "0.00";

    return (
        <div>
 <Header />
      <div className="carrinho-container">
        <h1>Sacola de Compras</h1>
        {carrinho.length > 0 ? (
          carrinho.map((item, index) => (
            <div className="carrinho-item" key={index}>
              <img src={item.img} alt={item.nome} className="carrinho-img" />
              <p className="item-name">{item.title}</p>
              <p className="item-price">R$ {(item.value * item.quantidade).toFixed(2)}</p>
              <p className="item-quantity">Quantidade: {item.quantidade}</p>
              <button className="remove-button" onClick={() => removerDoCarrinho(item.id)}>
                Remover
              </button>
            </div>
          ))
        ) : (
          <p className="empty-cart">Sua sacola está vazia.</p>
        )}
        <div className="carrinho-total">
          <p className="total-text">Total: R$ {total}</p>
          <Link to="/pagamentos">
            <button className="checkout-button" disabled={carrinho.length === 0}>
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
      <Footer />
        </div>
    );
};

export default Carrinho;
