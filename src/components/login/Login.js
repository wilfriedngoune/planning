import axios from "axios";
import React, { useState } from "react";


//css
import '../../styles/login/login.css'
import Loader from "../signin/Loader";

//Les Urls
const Url = require('../../url')



function Login({setActivateLogin}){

    //etat des variables email et pass
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //Etat de gestion des erreurs.
    const [err, setErr] = useState(false)

    //Etat du Loader
    const [load, setLoad] = useState()

    //Fonction qui envoit les donnee
    const handleSubmit = () => {
        axios.post(Url.devUrl() + 'utilisateur',
        {
            'email' : email,
            'password' : password
        }, 

        ).then((res) => {
            console.log(res.data)
            if(res.data.email){
                console.log(res.data.email)
                setLoad(true)
                const redirect = setTimeout(() => {
                    window.location.href = "/dashboard"
                }, 2000);
            }
            else{
                setErr(true)
            }

        }).catch((err) => {
            throw err
        })
    }


    return(
        <section className = 'login-container'>
            <br /><br /><br /><br /><br />
            <section className = 'login-popup'>
                <section className = 'login-header'>
                    <span className = 'popup-title'>Connexion</span>
                    
                    <span class="material-symbols-outlined close-pop" onClick = {() => setActivateLogin(false)}>
                    close
                    </span>
                </section>
                <br /><br />
                <form>
                    <input type = 'email' id = 'email' className = 'login-field' placeholder = 'Email' onChange = {() => setEmail(document.getElementById('email').value)}/><span className = 'red-sign'>*</span>
                    
                    <input type = 'password' id = 'password' className = 'login-field' placeholder = 'Mot de passe' onChange = {() => setPassword(document.getElementById('password').value)} /><span className = 'red-sign'>*</span>
                    <br />
                    {err ? <div className = 'display-error'>Email ou Password invalide</div> : null}

                    <div className = 'login-submit' onClick = {() => handleSubmit()} >{load ? <Loader /> : <b>Connexion</b> } </div>
                </form>
            </section>
        </section>
    )
}

export default Login