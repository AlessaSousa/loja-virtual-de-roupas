import { Link } from 'react-router-dom';
import logoTrendix from '../../assets/svg/logoTrendix.svg';
import './Header.css';
import React, { useState } from "react";
// import { TreeSelect } from 'primereact/treeselect';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
// import useUser from './context/UserContext.jsx';
import { useUser } from '../../context/userContext';
import { useCarrinho } from '../../context/carrinhoContext';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function Header() {

    const { totalItens } = useCarrinho();
    
    const { user } = useUser();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const data = [
        { id: 1, type: 'Produto', name: 'Camisa' },
        { id: 2, type: 'Usuário', name: 'João' },
        { id: 3, type: 'Pedido', name: 'Pedido #123' },
        { id: 4, type: 'Produto', name: 'Calça' },
        { id: 5, type: 'Usuário', name: 'Maria' },
    ];

    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        setQuery(searchQuery);

        if (searchQuery.trim()) {
            const filteredResults = data.filter((item) =>
                item.name.toLowerCase().includes(searchQuery)
            )
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    }
    

    return (
        <>
            <div className="header">
                <Link to='/'><img className="logo" src={logoTrendix} alt="Trendix Logo" /></Link>

                <div className="menu">
                    <Link className='link-sobre' to="/sobre">Sobre</Link>
                    <Link className='link-catalago' to="/catalago">Catalago</Link>

                </div>

                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"> </InputIcon>
                    <InputText onChange={handleSearch} id='buscar' placeholder="Buscar" />
                </IconField>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {results.length > 0 ? (
                        results.map((item) => (
                            <li
                                key={item.id}
                                style={{
                                    padding: '10px',
                                    borderBottom: '1px solid #ddd,'
                                }}>
                                <strong>{item.type}: </strong> {item.name}
                            </li>
                        ))
                    ) : (
                        query && <li>Nenhum resultado encontrado.</li>
                    )}
                </ul>



                <div className="icons-and-buttons">
                    <i className="bi bi-heart"></i>
                    <Link to='/carrinho'>
                        {/* <Link className='icon-bag' to="/carrinho"> <i className="bi bi-bag"></i>
                        </Link>
                        {totalItens > 0 && <span className="cart-counter">{totalItens}</span>} */}

                        <Avatar id='avatar' className="p-overlay-badge icon-bag" icon="bi bi-bag">
                        {totalItens > 0 && (
                            <Badge value={totalItens} />
                        )}
                        </Avatar>
                    </Link>

                    {user ? (
                        <p class='m-0'>Olá <b> {user.name} </b></p>
                    ) : (
                        <>
                            <button className="register-button">
                                <Link to="/register">Cadastro</Link>
                            </button>
                            <button className="login-button">
                                <Link to="/login">Login</Link>
                            </button>
                        </>
                    )}

                </div>
            </div>
        </>
    );
}

export default Header;
