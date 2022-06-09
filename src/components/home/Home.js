import React from "react"
import Header from "./Header"
import "../../styles/home/home.css"
import { useState } from "react"
import Login from "../login/Login"
import Signin from "../signin/Signin"
import ProgrammationSimpleUser from "../dashboard/programmation/ProgrammationSimpleUser"




function Home(){

    //Etat qui me permet de gerer l'activation et la desactivatio du login
    const [activateLogin, setActivateLogin] = useState(false)
    const [activateSignin, setActivateSignin] = useState(false)

    //Etat qui affiche l'emplois de temps a l'acceuil
    const[displayShedule, setDisplayShedule] = useState(false)


    
    return(
        <section>
            {/*Affichage de la Login pop up */}
            {activateLogin ? <Login setActivateLogin = {setActivateLogin}/> : null}

            {/*Affichage de la Sign pop up */}
            {activateSignin ? <Signin setActivateSignin = {setActivateSignin}/> : null}


            {/*Le composant header de la page d'accueil */}
            <Header activateLogin = {activateLogin} setActivateLogin = {setActivateLogin} activateSignin = {activateSignin} setActivateSignin = {setActivateSignin}/>

            <br /><br /><br /><br /><br />
            <section className = "home-container">
                <section className = 'home-banner'>
                    <h3 className = 'banner-title'>Plannifiez des cours et réservez des salles en toute sécurité et fiabilité</h3>
                    <br />
                    <input type = 'search' placeholder = 'Rechercher salle, equipement ...' className = 'banner-search-field' />
                    <br /><br /><br />
                    <section className = 'banner-foot'>
                        <div className = 'banner-button' onClick = {() => setDisplayShedule(true)}>Consulter le planning</div>
                        {/* <div className = 'banner-button'>Faire un réservation</div> */}
                    </section>

                </section>
                <br />
                {/* Affichage de l'emplois de temps pour user */}
                {displayShedule ? <ProgrammationSimpleUser /> : null}
            </section>
        </section>
    )
}


export default Home