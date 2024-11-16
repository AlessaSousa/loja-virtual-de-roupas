import { Link } from 'react-router-dom';
import logoTrendix from '../../assets/svg/logoTrendix.svg';
import imageHomePage from '../../assets/svg/imageHomePage.svg';
import './Header.css';
import React, { useState } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
// import useUser from './context/UserContext.jsx';
import { useUser } from '../../context/userContext';

function Header() {

    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
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

    const categoria = [
        {
            key: '0',
            label: 'Feminino',
            data: 'Documents Folder',
            icon: 'pi pi-fw pi-inbox',
            children: [
                { key: '0-0', label: 'Blusas e Camisetas', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                { key: '0-1', label: 'Camisas e Polos', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                { key: '0-2', label: 'Vestidos', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '0-3', label: 'Saias', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '0-4', label: 'Calças e Leggings', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '0-5', label: 'Shorts e Bermudas', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '0-6', label: 'Jaquetas e Casacos', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '0-7', label: 'Moda íntima e Lingerie', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '0-8', label: 'Moda Praia', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
            ]
        },
        {
            key: '1',
            label: 'Masculino',
            data: 'Events Folder',
            icon: 'pi pi-fw pi-calendar',
            children: [
                { key: '1-0', label: 'Blusas e Camisetas', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                { key: '1-1', label: 'Camisas e Polos', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                { key: '1-2', label: 'Calças e Bermudas', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '1-3', label: 'Jaquetas e Casacos', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '1-4', label: 'Moletom', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '1-5', label: 'Roupa Social', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '1-6', label: 'Moda íntima', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
            ]
        },
        {
            key: '2',
            label: 'Infantil',
            data: 'Events Folder',
            icon: 'pi pi-fw pi-calendar',
            children: [
                { key: '2-0', label: 'Roupas para bebê', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                { key: '2-1', label: 'Conjuntos e Macacões', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                { key: '2-2', label: 'Camisetas e Polos', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '2-3', label: 'Vestidos e Saias', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '2-4', label: 'Calças e Bermudas', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '2-5', label: 'Jaquetas e Moletons', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }

            ]
        },
        {
            key: '3',
            label: 'Esporte',
            data: 'Events Folder',
            icon: 'pi pi-fw pi-calendar',
            children: [
                { key: '3-0', label: 'Roupas de Academia', icon: 'pi pi-fw pi-calendar-plus', data: 'Meeting' },
                { key: '3-1', label: 'Shorts e Leggings', icon: 'pi pi-fw pi-calendar-plus', data: 'Product Launch' },
                { key: '3-2', label: 'Camisetas e Regatas', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' },
                { key: '3-3', label: 'Agasalhos e Jaqeutas Esportivas', icon: 'pi pi-fw pi-calendar-plus', data: 'Report Review' }
            ]
        },
    ]

    return (
        <>
            <div className="header">
                <img className="logo" src={logoTrendix} alt="Trendix Logo" />

                <div className="menu">
                    <Link className='link-sobre' to="/sobre">Sobre</Link>
                    <Link className='link-catalago' to="/catalogo">Catalogo</Link>




                    {/* <div className="dropdown">
                        <button className="dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria <i className="bi-caret-down"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div> */}

                    <div className="">
                        <TreeSelect id="treeSelect" value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={categoria}
                            className="md:w-15rem w-full" placeholder="Categoria"></TreeSelect>
                    </div>

                </div>

                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search"> </InputIcon>
                    <InputText onChange={handleSearch} id='buscar' placeholder="Buscar" />
                </IconField>
                <ul style={{ listStyle: 'none', padding: 0}}>
                    {results.length > 0 ? (
                        results.map((item) => (
                            <li
                            key={item.id}
                            style={{ padding: '10px',
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
                    <i className="bi bi-bag"></i> 
                     {user ?  (
                      <p>Olá <b> {user.name} </b></p>
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

            <div className="image-section">
                <img className='image-home-page' src={imageHomePage} alt="Home Page" />
                <div className='text-image-home'>
                    <p className='title-catalago'>Conheça nosso catálago</p>
                    <p className='description-catalago'>O trendix conta com um catálago variado de peças ecológicas. Por que escolher<br></br>
                        entre preço baixo e sustentabilidade quando se pode ter os dois?
                    </p>
                    <Link to='./catalago'><button className='btn-catalago'>Catálago</button> </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
