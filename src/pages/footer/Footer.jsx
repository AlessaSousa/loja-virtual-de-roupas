import './Footer.css'
import logo from '../../assets/png/logo.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className='links'>
                <img src={logo}></img>
                <p>Sobre nós</p>
                <p>Contate-nos</p>
                <p>Termos de serviço</p>
            </div>
            <div className='text-direitos'>
                <p>Todos os direitos reservados &copy; 2024</p>
            </div>
        </footer>
    )
}

export default Footer