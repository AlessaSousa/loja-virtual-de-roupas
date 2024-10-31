import React from 'react';

function Login() {
    return (
        <div style={{ padding: "20px" }}>
        <h2>Login</h2>
        <form>
            <div>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" name="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    );
}

export default Login;
