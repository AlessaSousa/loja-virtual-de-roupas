import { Link } from 'react-router-dom';
import logoTrendix from '../../assets/svg/logoTrendix.svg';
import imageHomePage from '../../assets/svg/imageHomePage.svg';
import './Header.css';

function Header() {
    return (
        <>
            <div className="header">
                <img className="logo" src={logoTrendix} alt="Trendix Logo" />

                <div className="menu">
                    <div><p>Sobre</p></div>
                    <div><p>Catálogo</p></div>

                    <div className="dropdown">
                        <button className="dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria <i className="bi-caret-down"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                <div className="search-bar">
                    <input type="search" placeholder="Buscar" />
                </div>

                <div className="icons-and-buttons">
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-bag"></i>
                    <button className="register-button">
                        <Link to="/register">Cadastro</Link>
                    </button>
                    <button className="login-button">
                        <Link to="/login">Login</Link>
                    </button>
                </div>
            </div>

            <div className="image-section">
                <img src={imageHomePage} alt="Home Page" />
            </div>
        </>
    );
}

export default Header;
