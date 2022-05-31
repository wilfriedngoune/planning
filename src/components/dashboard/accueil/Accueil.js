import React, { useEffect, useState } from "react";
import Logo from "../dashboardHeader/Logo";
import AccueilLinks from "./AccueilLinks";
import axios from "axios";


//Les images
import ProfilPicture from "../dashboardHeader/ProfilPicture";

//css
import '../../../styles/dashboard/dashboardHeader.css'
import '../../../styles/dashboard/accueil/accueil.css'

//Les urls
const Url = require('../../../url')



function Accueil(){
    //Constante qui contient les information du user connecte
    const[userInfo, setUserInfo] = useState({})

    //Recuperation des elements du user dans la base de donne
    useEffect(() => {
        let link = Url.devUrl() + localStorage.getItem("role") + localStorage.getItem("id"); 
        console.log(link)
        axios.get(link, 
        ).then((res) => {
            console.log(res.data)
            setUserInfo(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])



    return(
        <section>
            <section className = 'dashboard-header-container'>
                <Logo />
                <section className = 'links-and-picture'>
                    <AccueilLinks />
                    <ProfilPicture />
                </section>
            </section>
            <br /><br /><br /><br />
            <section className = 'accueil-big-section'>
                
                <section className = 'accueil-right-section'>
                    <div className = 'title'>Les fonctionnalites que vous offre Planning</div>
                    <br /><br />
                    {/* Listing des fonctionnalite */}

                    <section className = 'item-container'>
                        
                        {/* Ressource */}

                        {userInfo.role === "admin" ? <section className = 'item-fonctionnalite' onClick = {() => window.location.href = '/dashboard/ressource/salle'}>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Gerer les ressources</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Ici on vous donne la possibilite d'ajouter les salles, les modifier, les supprimer, gerer les salles en fonction des batiments et leurs types.</div>
                        </section> : null}

                        {/* Emplois de temps */}
                        <section className = 'item-fonctionnalite' onClick = {() => window.location.href = '/dashboard/programmation'}>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Consultation des emplois de temps</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Consulter les emplois de temps de maniere generale, consulter les emplois de temps pour votre classe, imprimer les emplois de temps. </div>
                        </section>

                        {/* Reservation */}
                        <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Resersation</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Reserver les ressources de la fac, par exemple une salle et un video projecteur lorsque vous voulez faire un cours improvise.</div>
                        </section>

                        {/* chat */}
                        <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Chatter</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Envoyer des requete personnalisees par rapport a un changement d'emplois de temps ou communiquez avec les administrateurs par rapport aux reservations.</div>
                        </section>

                         {/* Editer les emplois de temps */}
                         {userInfo.role === "admin" ? <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Editer et creer des plannings</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Ici on vous donne la possibilite d'ajouter les salles, les modifier, les supprimer, gerer les salles en fonction des batiments et leurs type.</div>
                        </section> : null}

                        
                    </section>

                </section>
            </section>
            
            
        </section>
    )
}


export default Accueil