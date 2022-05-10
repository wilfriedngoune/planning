import React from "react";
import logo_blue from "../../images/logos/logo_blue.png"
import '../../styles/home/header.css'

//Ce composant va permettre de definir le header de toute les pages d'accueil.
function Header({setActivateLogin}){

    const handleActivateLogin = () => {
        setActivateLogin(true)
    }
    return(
        <section className = "container">
            <img src = {logo_blue} alt = "Le logo de l'application" className = 'logo-header'/>
            <section className = 'nav-links'>
                <span className = 'home-link' onClick = {() => handleActivateLogin()}>Se connecter</span>
                <div className = "button">S'inscrire</div>
            </section>
        </section>
    )
}

export default Header