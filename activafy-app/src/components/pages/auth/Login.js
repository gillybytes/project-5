import React from 'react';
import './style.css'
export const Login = () => {
    return(
        <container className="section">
            <h1>Welcome to Activafy!</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </container>
    )
}

export default Login;