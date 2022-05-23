import React from "react";
import '../../styles/login/login.css'

function Signin(){
    return(
        <section className = 'login-container'>
            <br /><br /><br /><br /><br />
            <section className = 'login-popup'>
                <span className = 'popup-title'>Inscription</span>
                <br /><br />
                <form>
                    <input type = 'email' className = 'login-field' placeholder = 'Noms et Prenoms'/>

                    <input type = 'text' className = 'login-field' placeholder = 'Email'/>
                    
                    <input type = 'password' className = 'login-field' placeholder = 'Mot de passe'/>
                    <br />
                    <input type = 'submit' value = 'Enregistrer' className = 'login-submit'/>
                </form>
            </section>
        </section>
    )
}

export default Signin