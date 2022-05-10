import React from "react";
import '../../styles/login/login.css'

function Login(){
    return(
        <section className = 'login-container'>
            <br /><br /><br /><br /><br />
            <section className = 'login-popup'>
                <span className = 'popup-title'>Connexion</span>
                <br /><br />
                <form>
                    <input type = 'email' className = 'login-field' placeholder = 'Email'/>
                    
                    <input type = 'password' className = 'login-field' placeholder = 'Mot de passe'/>
                    <br />
                    <input type = 'submit' value = 'Connexion' className = 'login-submit'/>
                </form>
            </section>
        </section>
    )
}

export default Login