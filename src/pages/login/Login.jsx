import imageRegister from '../../assets/svg/imageRegister.svg';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';  
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import iconGoogle from '../../assets/svg/iconGoogle.svg';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/authProvider';
import api from '../../api/axios';
import clientId from '../../clienteID/clienteID';
import { jwtDecode } from 'jwt-decode';
import { useUser } from '../../context/userContext';

function Login() {
    const { setAuth } = useContext(AuthContext);
    const { setUser } = useUser();
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

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

        const token = localStorage.getItem('authToken');

        try {
            const response = await api.post('/routes/login', 
                JSON.stringify({email, senha: senha}),
                {
                    headers: {'Content-Type': 'application/json',  'Authorization': `Bearer ${token}`},
                    withCredentials: true
                }
            ).then(response => {
                const token = response.data.accessToken;
                localStorage.setItem('authToken', token);
                console.log('Token:', token);
            })
            .catch(error => {
                console.error('Login error:', error.response?.data || error.message);
            });
            
            const accessToken = response?.data?.accessToken;
            const roles = response?.data.roles;

            setAuth({email, senha: senha, roles, accessToken});
            setUser({ name: email });

            setEmail('');
            setPassword('');
            setSuccess(true);
            navigate('/'); 
        } catch (error) {
            if (!error?.response) {
                console.log(error);
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
        const decodeToken = jwtDecode(response.credential);
        const userName = decodeToken.name;
            setUser({ name: userName });
            navigate('/');

    };

    const handleGoogleLoginFailure = (error) => {
        console.log("Google login failed:", error);
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
            <div className="back-button-container">
                        <Link to="/" className="back-button">
                            &lt; Voltar
                        </Link>
                    </div>
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
