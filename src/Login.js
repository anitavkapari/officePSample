import React from 'react';

function Login() {
    return (
        <div>
            <h2>Login Page</h2>

            <label>User Name</label>
            <input type="text" /><br />

            <label>Password</label>
            <input type="password" /><br />

            <input type="submit">Submit</input>
        </div>
    )
}
export default Login;