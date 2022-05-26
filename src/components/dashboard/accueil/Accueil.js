import React from "react";
import Logo from "../dashboardHeader/Logo";
import AccueilLinks from "./AccueilLinks";

//Les images
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import logoBleu from '../../../images/logos/logo_blue.png'

//css
import '../../../styles/dashboard/dashboardHeader.css'
import '../../../styles/dashboard/accueil/accueil.css'


function Accueil(){
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
                <section className = 'accueil-left-section'>
                    <br /><br /><br /><br /><br /><br />
                    <div className = 'p-style'>P</div>
                    <br />
                    <img src = {logoBleu} className = 'accueil-logo' />
                </section>

                <section className = 'accueil-right-section'>
                    <div className = 'title'>Les fonctionnalites que vous offre Planning</div>
                    <br /><br />
                    {/* Listing des fonctionnalite */}

                    <section className = 'item-container'>
                        {/* Ressource */}
                        <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Gerer les ressources</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Ici on vous donne la possibilite d'ajouter les salles, les modifier, les supprimer, gerer les salles en fonction des batiments et leurs type.</div>
                        </section>

                        {/* Emplois de temps */}
                        <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Consultation des emplois de temps</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Consulter les emplois de temps generale, </div>
                        </section>

                        {/* Reservation */}
                        <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Resersation</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Ici on vous donne la possibilite d'ajouter les salles, les modifier, les supprimer, gerer les salles en fonction des batiments et leurs type.</div>
                        </section>

                        {/* chat */}
                        <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Chatter</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Ici on vous donne la possibilite d'ajouter les salles, les modifier, les supprimer, gerer les salles en fonction des batiments et leurs type.</div>
                        </section>

                         {/* Editer les emplois de temps */}
                         <section className = 'item-fonctionnalite'>
                            <section className = 'button-and-nothing'>
                                <div className = 'item-button'>Editer et creer des plannings</div>
                            </section>
                            <br />
                            <div className = 'item-text'>Ici on vous donne la possibilite d'ajouter les salles, les modifier, les supprimer, gerer les salles en fonction des batiments et leurs type.</div>
                        </section>

                        
                    </section>

                </section>
            </section>
            
            
        </section>
    )
}


export default Accueil