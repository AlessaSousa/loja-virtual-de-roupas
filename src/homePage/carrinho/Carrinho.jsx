import React, { useState } from 'react';
import './Carrinho.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import sobretudoBege from '../../assets/svg/sobretudo-bege.svg';
import cuidadoscompele from '../../assets/png/cuidadoscompele.png';
import camisaMasculina from '../../assets/svg/camisa-masculina-branca.svg';
import calcaAlfaiataria from '../../assets/svg/calça-alfaiataria.svg';
import sabaoembarra from '../../assets/png/sabaoembarra.png';
import { Link } from 'react-router-dom';

const Carrinho = () => {
    // Estado para os itens do carrinho
    const [carrinho, setCarrinho] = useState([
        { id: 1, nome: 'Sobretudo Bege', preco: 199.99, img: sobretudoBege },
        { id: 2, nome: 'Camisa Oversized', preco: 129.99, img: camisaMasculina },
    ]);

    // Itens disponíveis para adicionar ao carrinho
    const produtos = [
        { id: 3, nome: 'Conjunto Paletó e Calça', preco: 249.99, img: calcaAlfaiataria },
        { id: 4, nome: 'Kit Serum Facial', preco: 79.99, img: cuidadoscompele },
        { id: 5, nome: 'Kit Sabão Natural', preco: 49.99, img: sabaoembarra },
    ];

    // Função para remover item do carrinho
    const removerDoCarrinho = (id) => {
        setCarrinho(carrinho.filter((item) => item.id !== id));
    };

    // Função para adicionar item ao carrinho
    const adicionarAoCarrinho = (produto) => {
        if (!carrinho.some((item) => item.id === produto.id)) {
            setCarrinho([...carrinho, produto]);
        }
    };

    // Calcular o total
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);

    return (
        <div>
            <Header />
            <div className="carrinho-container">
                <h1>Sacola de Compras</h1>

                {/* Lista de itens no carrinho */}
                {carrinho.length > 0 ? (
                    carrinho.map((item) => (
                        <div className="carrinho-item" key={item.id}>
                            <img src={item.img} alt={item.nome} className="carrinho-img" />
                            <p className="item-name">{item.nome}</p>
                            <p className="item-price">R$ {item.preco.toFixed(2)}</p>
                            <button
                                className="remove-button"
                                onClick={() => removerDoCarrinho(item.id)}
                            >
                                Remover
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="empty-cart">Sua sacola está vazia.</p>
                )}

                {/* Total */}
                <div className="carrinho-total">
                    <p className="total-text">Total: R$ {total}</p>
                    <Link to="/pagamentos">
                        <button className="checkout-button" disabled={carrinho.length === 0}>
                            Finalizar Compra
                        </button>
                    </Link>
                </div>

                <h2 className="int-titulo">Pode ser de seu interesse</h2>
                <div className="interesses">
                    {produtos.map((produto) => (
                        <div className="int-item" key={produto.id}>
                            <img src={produto.img} alt={produto.nome} className="int-imagem" />
                            <p className="int-nome">{produto.nome}</p>
                            <p className="item-price">R$ {produto.preco.toFixed(2)}</p>
                            <button
                                className="add-button"
                                onClick={() => adicionarAoCarrinho(produto)}
                            >
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Carrinho;
