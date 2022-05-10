import React from "react"
import Header from "./Header"
import "../../styles/home/home.css"
import { useState } from "react"
import Login from "../login/Login"




function Home(){

    //Etat qui me permet de gerer l'activation et la desactivatio du login
    
    const [activateLogin, setActivateLogin] = useState(false)
    
    return(
        <section>
            {/*Affichage de la Login pop up */}
            {console.log(activateLogin)}
            {activateLogin ? <Login /> : null}

            {/*Le composant header de la page d'accueil */}
            <Header activateLogin = {activateLogin} setActivateLogin = {setActivateLogin}/>

            <br /><br /><br /><br /><br />
            <section className = "home-container">
                <section className = 'home-banner'>
                    <h3 className = 'banner-title'>Plannifiez des cours et réservez des salles en toute sécurité et fiabilité</h3>
                    <br />
                    <input type = 'search' placeholder = 'Rechercher quelque chose' className = 'banner-search-field' />
                    <br /><br /><br />
                    <section className = 'banner-foot'>
                        <div className = 'banner-button'>Consulter le planning</div>
                        <div className = 'banner-button'>Faire un réservation</div>
                    </section>

                </section>
            </section>
        </section>
    )
}


export default Home