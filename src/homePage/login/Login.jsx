import imageRegister from '../../assets/svg/imageRegister.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import AppleLogin from 'react-apple-login';
import iconApple from '../../assets/svg/iconApple.svg';
import iconGoogle from '../../assets/svg/iconGoogle.svg';
import { useRef, useState, useEffect, useContext } from 'react';
// import { use } from '../../../back-july/routes/users';
import AuthContext from '../../context/authProvider';
import axios from '../../api/axios';

const LOGIN_URL = './auth';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [success, setSucess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMessage('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({email, password}),
                {
                    headers: {'Content-type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.accessToken;
            const roles = response?.data.roles;
            setAuth({email, password, roles, accessToken});
            setEmail('');
            setPassword('');
            setSucess(true); 
        }
        catch (error) {
            if(!error?.response) {
                setErrMessage('No server response');
            } else if (error.response?.status === 400 ) {
                setErrMessage('Missing Email or Password');
            } else if (error.response?.status === 401) {
                setErrMessage('Unauthorized');
            } else {
                setErrMessage('Login failed')
            }
            errRef.current.focus();
        }  
    }

    const handleGoogleLoginSuccess = (response) => {
        console.log("Google login successful:", response);
 
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

    return (
        // <GoogleOAuthProvider clientId="SUA_CLIENT_ID_GOOGLE">
        <>
        {success ? (
            <section>
                <h1>You are logged in</h1>
                <br/>
                <p>
                    <a href='#'>Go to Home</a>
                </p>
            </section>

        ) : (

        <section>
            <p ref={errRef} className={errMessage ? "errmsg" : "offscreen"} aria-live='assertive'>{errMessage}</p><div className='container-register'>
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
                        <label htmlFor='password'>Senha</label>
                        <input id='password' type="password" name="password" placeholder='Senha'
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className='button-register' type="submit">Entrar</button>
                    <p className='text-center p-5 pb-2'>ou</p>

                    {/* <div className='button-icons'>
        <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                    <img src={iconGoogle} alt="Google Icon" /> Entrar com Google
                </button>
            )}
        />
        <AppleLogin
            clientId="SUA_CLIENT_ID_APPLE"
            redirectURI="SUA_REDIRECT_URI"
            onSuccess={handleAppleLoginSuccess}
            onFailure={handleAppleLoginFailure}
            render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                    <img src={iconApple} alt="Apple Icon" /> Entrar com Apple
                </button>
            )}
        />
    </div> */}

                    <p className='text-center'>
                        Não tem uma conta? <Link className='link' to='/register'>Cadastrar</Link>
                    </p>
                </form>
            </div>

            {/* <div className='imageRegister'> */}
            <img className='imageRegister' src={imageRegister} alt="Register" />
            {/* </div> */}
        </div>
    
        </section>
        )}

        {/* // </GoogleOAuthProvider> */}
</>
    );
    
}

export default Login;
