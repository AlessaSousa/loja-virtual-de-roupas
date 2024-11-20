import React, { useState } from 'react';
import './Pagamentos.css'; 
import Header from '../header/Header';
import Footer from "../footer/Footer";

const Pagamentos = () => {
    const [metodo, setMetodo] = useState('');

    const renderFormulario = () => {
        switch (metodo) {
            case 'pix':
                return (
                    <div className="form-section">
                        <h2>Pagamento via Pix</h2>
                        <p>Escaneie o QR Code gerado após finalizar o pagamento.</p>
                        <button className="submit-button">Gerar QR Code</button>
                    </div>
                );
           
            case 'cartao':
                return (
                    <div className="form-section">
                        <h2>Pagamento via Cartão de Crédito</h2>
                        <form className="pagamentos-form">
                            <div className="form-group">
                                <label htmlFor="cardName">Nome no Cartão</label>
                                <input type="text" id="cardName" placeholder="Digite o nome no cartão" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardNumber">Número do Cartão</label>
                                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expiration">Validade</label>
                                <input type="text" id="expiration" placeholder="MM/AA" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" placeholder="123" required />
                            </div>
                            <button type="submit" className="submit-button">Finalizar Pagamento</button>
                        </form>
                    </div>
                );
            default:
                return <p>Escolha um método de pagamento para continuar.</p>;
        }
    };

    return (  
        <div className="pagamentos-container">
            <Header />

            <main className="pagamentos-main">
                <h1>pagamentos</h1>
                
                <div className="metodos-pagamento">
                    <button onClick={() => setMetodo('pix')} className={`metodo-button ${metodo === 'pix' ? 'ativo' : ''}`}>
                        <i  class="bi bi-qr-code-scan">
                        Pix</i>
                    </button>
                  
                    <button onClick={() => setMetodo('cartao')} className={`metodo-button ${metodo === 'cartao' ? 'ativo' : ''}`}>
                    <i class="bi bi-credit-card-2-back-fill">
                        Cartão de Crédito</i>
                    </button>
                </div>

                <div className="formulario-pagamento">
                    {renderFormulario()}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pagamentos;
