import React from 'react';
import './Carrinho.css'; 
import Header from '../header/Header';
import Footer from "../footer/Footer";
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg'
import cuidadoscompele from "../../assets/png/cuidadoscompele.png";
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg'
import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg'
import sabaoembarra from "../../assets/png/sabaoembarra.png";

const Carrinho = () => {
    return (  
    <div>
        <Header/>
        <div className="carrinho-container">
            <h1>Sacola de Compras</h1>
         
            <div className="carrinho-total">
                <p className="total-text">Total:</p>
                <button className="checkout-button">Finalizar Compra</button>
            </div> 

            <h2 className="int-titulo">Pode ser de seu interesse</h2>
            <div className="interesses">
                <div className="int-item">
                <img src={cuidadoscompele} alt="Produto 1" className="int-imagem" />
                    <p className="int-nome">Kit Serum Facial</p>
                </div>
                <div className="int-item">
                    <img src={sobretudoBege} alt="Produto 2" className="int-imagem" />
                    <p className="int-nome">Sobretudo Bege</p>
                </div>
                <div className="int-item">
                    <img src={camisaMasculina} alt="Produto 3" className="int-imagem" />
                    <p className="int-nome">Camisa Oversized</p>
                </div>
                <div className="int-item">
                    <img src={calcaAlfaiataria} alt="Produto 4" className="int-imagem" />
                    <p className="int-nome">Conjuto Paletó e calça</p>
                </div>
                <div className="int-item">
                    <img src={sabaoembarra} alt="Produto 5" className="int-imagem" />
                    <p className="int-nome">Kit Sabão Natural</p>
                </div>
            </div>
        </div> 
        <Footer />
    </div>
    );
};

export default Carrinho;