import React from 'react';

function Register() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Register</h2>
            <form>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="password" />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Register;
