import imageRegister from '../../assets/svg/imageRegister.svg';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Adicione useNavigate   
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import AppleLogin from 'react-apple-login';
import iconApple from '../../assets/svg/iconApple.svg';
import iconGoogle from '../../assets/svg/iconGoogle.svg';
import { useRef, useState, useEffect, useContext } from 'react';
// import { use } from '../../../back-july/routes/users';
import AuthContext from '../../context/authProvider';
import api from '../../api/axios';
import clientId from '../../../clienteID/clienteID';

// const LOGIN_URL = 'http://localhost:3001/usuarios/login';
// import { useUser } from './UserContext';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate(); // Inicialize o hook useNavigate

    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMessage('');
    }, [email, senha])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/usuarios/login', 
                JSON.stringify({email, senha: senha}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            
            const accessToken = response?.data?.accessToken;
            const roles = response?.data.roles;
            setAuth({email, senha: senha, roles, accessToken});
            setEmail('');
            setPassword('');
            setSuccess(true);

            // Redirecionar para a Home
            navigate('/'); // Redireciona automaticamente para a Home
        } catch (error) {
            if (!error?.response) {
                setErrMessage('No server response');
            } else if (error.response?.status === 400) {
                setErrMessage('Missing Email or Password');
            } else if (error.response?.status === 401) {
                setErrMessage('Unauthorized');
            } else {
                setErrMessage('Login failed');
            }
            errRef.current.focus();
        }  
    };


    const handleGoogleLoginSuccess = (response) => {
        console.log("Google login successful:", response);
        const userEmail = response.profileObj.email;
        setUser({email: userEmail})
        navigate('/')
 
    };

    const handleGoogleLoginFailure = (error) => {
        console.log("Google login failed:", error);
    };

    const handleAppleLoginSuccess = (response) => {
        console.log("Apple login successful:", response);
  
    };

    const handleAppleLoginFailure = (error) => {
        console.log("Apple login failed:", error);
    };

    // const {setUser} = useUser()

    return (
        <GoogleOAuthProvider clientId={clientId}>
      
        {success ? (
            <section>
                <h1>You are logged in</h1>
                <br/>
                <p>
                    <a href='#'>Go to Home</a>
                </p>
            </section>

        ) : (

        <>
            <p ref={errRef} className={errMessage ? "errmsg" : "offscreen"} style={{margin:0}} aria-live='assertive'>{errMessage}</p><div className='container-register'>
            <div className='form'>
                <h2>Bem vindo de volta</h2>
                <p className='text-entrar'>Entrar em sua conta</p>
                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' ref={userRef} type="email" name="email" placeholder='E-mail'
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='input'>
                        <label htmlFor='senha'>Senha</label>
                        <input id='senha' type="password" name="senha" placeholder='Senha'
                            value={senha} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className='button-register' type="submit">Entrar</button>
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
        {/* <AppleLogin
            clientId="SUA_CLIENT_ID_APPLE"
            redirectURI="SUA_REDIRECT_URI"
            onSuccess={handleAppleLoginSuccess}
            onFailure={handleAppleLoginFailure}
            render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                    <img src={iconApple} alt="Apple Icon" /> Entrar com Apple
                </button>
            )}
        /> */}
    </div>

                    <p className='text-center'>
                        Não tem uma conta? <Link className='link' to='/register'>Cadastrar</Link>
                    </p>
                </form>
            </div>

            {/* <div className='imageRegister'> */}
            <img className='imageRegister' src={imageRegister} alt="Register" />
            {/* </div> */}
        </div>
    
        </>
        )}

         </GoogleOAuthProvider>
    );
    
}

export default Login;
