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
                   <Link to="/src/homePage/sobre">Sobre</Link>
                   <Link to="/src/homePage/catalogo">catalogo</Link>


                    

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
                <img className='image-home-page' src={imageHomePage} alt="Home Page" />
                <div className='text-image-home'>
                    <p className='title-catalago'>Conheça nosso catálago</p>
                    <p className='description-catalago'>O trendix conta com um catálago variado de peças ecológicas. Por que escolher<br></br>
                        entre preço baixp e sustentabilidade quando se pode ter os dois?
                    </p>
                    <Link to='./catalago'><button className='btn-catalago'>Catálago</button> </Link> 
                </div>
            </div>
        </>
    );
}

export default Header;
