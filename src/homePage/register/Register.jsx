import imageRegister from '../../assets/svg/imageRegister.svg';
import './Register.css';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import iconGoogle from '../../assets/svg/iconGoogle.svg';
import { useNavigate } from 'react-router-dom';

import api from '../../api/axios';
import { useState } from 'react';
import clientId from '../../../clienteID/clienteID';
import { useUser } from '../../context/userContext';

function Register() {

    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
    const payload = {
        nome,
        email,
        senha,
    };

    api.post('/usuarios', payload) 
    .then(response => {
        alert("Dados enviado com sucesso!")
        console.log(response.data);
        navigate('/login');
    })
    .catch(error => {
        alert("Erro ao cadastrar")
        console.error("erro ao cadastrar: ", error);
    });
};

    const handleGoogleLoginSuccess = (response) => {
        console.log("Google login successful:", response);
        const decodeToken = jwtDecode(response.credential);
        const userName = decodeToken.name;
        setUser({ name: userName });
        navigate('/');
 
    };

    const handleGoogleLoginFailure = (error) => {
        console.log("Google login failed:", error);
    };


    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className='container-register'>
                <div className='form'>
                    <h2>Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input'>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder='Nome' value={nome}
                            onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className='input'>
                            <label>Email</label>
                            <input type="email" name="email" placeholder='E-mail'
                            value={email} onChange={(e) => setEmail(e.target.value)} required
                            />
                        </div>
                        <div className='input'>
                            <label>Senha</label>
                            <input type="password" name="senha" placeholder='Senha' 
                            value={senha} onChange={(e) => setPassword(e.target.value)} required
                            />
                        </div>
                        <button className='button-register' type="submit">Cadastrar</button>
                        <p className='text-center p-5 pb-2'>ou</p>
                        
                        <div className='button-icons'>
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                render={(renderProps) => (
                                    <button onClick={renderProps.onClick}>
                                        <img src={iconGoogle} alt="Google Icon" /> Entrar com Google
                                    </button>
                                )}
                            />
                        </div>

                        <p className='text-center'>
                            Já tem uma conta? <Link className='link' to='/login'>Entrar</Link>
                        </p>
                    </form>
                </div>

                {/* <div className='imageRegister'> */}
                    <img className='imageRegister' src={imageRegister} alt="Register" />
                {/* </div> */}
            </div>
         </GoogleOAuthProvider>
    );
}

export default Register;
