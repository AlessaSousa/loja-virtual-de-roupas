import React, { useState } from 'react';
import './Pagamentos.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Pagamentos = () => {
    const [metodo, setMetodo] = useState('');
    const [endereco, setEndereco] = useState({
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        cep: '',
    });

    const handleEnderecoChange = (e) => {
        setEndereco({
            ...endereco,
            [e.target.name]: e.target.value,
        });
    };

    const renderFormularioPagamento = () => {
        switch (metodo) {
            case 'pix':
                return (
                    <div className="form-section">
                        <h3>Pagamento via Pix</h3>
                        <p>Escaneie o QR Code gerado após finalizar o pagamento.</p>
                        <button className="submit-button">Gerar QR Code</button>
                    </div>
                );

            case 'cartao':
                return (
                    <div className="form-section">
                        <h3>Pagamento via Cartão de Crédito</h3>
                        <form className="form">
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

    const renderFormularioEndereco = () => (
        <div className="form-section">
            <h3>Endereço de Entrega</h3>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="rua">Rua</label>
                    <input
                        type="text"
                        id="rua"
                        name="rua"
                        placeholder="Digite a rua"
                        value={endereco.rua}
                        onChange={handleEnderecoChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numero">Número</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        placeholder="Número da casa ou apartamento"
                        value={endereco.numero}
                        onChange={handleEnderecoChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bairro">Bairro</label>
                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        placeholder="Digite o bairro"
                        value={endereco.bairro}
                        onChange={handleEnderecoChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        placeholder="Digite a cidade"
                        value={endereco.cidade}
                        onChange={handleEnderecoChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cep">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="Digite o CEP"
                        value={endereco.cep}
                        onChange={handleEnderecoChange}
                        required
                    />
                </div>
            </form>
        </div>
    );

    return (
        <div className="pagamentos-container">
            <Header />

            <main className="pagamentos-main">
                <h1>Pagamento e Endereço de Entrega</h1>

                <div className="metodos-pagamento">
                    <button
                        onClick={() => setMetodo('pix')}
                        className={`metodo-button ${metodo === 'pix' ? 'ativo' : ''}`}
                    >
                        Pix
                    </button>
                    <button
                        onClick={() => setMetodo('cartao')}
                        className={`metodo-button ${metodo === 'cartao' ? 'ativo' : ''}`}
                    >
                        Cartão de Crédito
                    </button>
                </div>

                <div className="conteudo-pagamento-endereco">
                    <div className="coluna">{renderFormularioPagamento()}</div>
                    <div className="coluna">{renderFormularioEndereco()}</div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pagamentos;
