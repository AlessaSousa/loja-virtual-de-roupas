import imageRegister from '../../assets/svg/imageRegister.svg';
import './Login.css';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import AppleLogin from 'react-apple-login';
import iconApple from '../../assets/svg/iconApple.svg';
import iconGoogle from '../../assets/svg/iconGoogle.svg';

function Login() {

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
        <GoogleOAuthProvider clientId="SUA_CLIENT_ID_GOOGLE">
            <div className='container-register'>
                <div className='form'>
                    <h2>Bem vindo de volta</h2>
                    <p className='text-entrar'>Entrar em sua conta</p>
                    <form>
                        <div className='input'>
                            <label>Email</label>
                            <input type="email" name="email" placeholder='E-mail' />
                        </div>
                        <div className='input'>
                            <label>Senha</label>
                            <input type="password" name="password" placeholder='Senha' />
                        </div>
                        <button className='button-register' type="submit">Entrar</button>
                        <p className='text-center p-5 pb-2'>ou</p>
                        
                        <div className='button-icons'>
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
                        </div>

                        <p className='text-center'>
                            Não tem uma conta? <Link className='link' to='/register'>Cadastrar</Link>
                        </p>
                    </form>
                </div>

                <div className='imageRegister'>
                    <img src={imageRegister} alt="Register" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
