import React from "react";
import '../../../styles/dashboard/dashboardHeader.css'
import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import LatBar from "./LatBar";
import RessourceLinks from "./RessourceLinks";
import '../../../styles/dashboard/ressource/ressource.css'
import SalleBatiment from "./SalleBatiment";

function Ressource(){
    return(
        <section>
            {/*Le Header */}
            <section className = 'dashboard-header-container'>
                <Logo />
                <section className = 'links-and-picture'>
                    <RessourceLinks />
                    <ProfilPicture />
                </section>
            </section>

            {/*La partie gauche et droite de la page */}
            <section className = 'ressource-container'>
                <LatBar />
                <section className = 'right-side'>

                    <section className = 'right-side-header'>
                        <span className = 'title'>Les salles</span>
                        <section className = 'new-salle-and-search'>
                            <div className = 'new-salle'>Nouvelle salle</div>
                            <input type = 'search' placeholder = 'Rechercher une salle' className = 'new-salle search-field' />
                        </section>
                    </section>

                    {/*Type d'affichage des salles*/}
                    <br />
                    <section className = 'display-type'>
                        <h4>Afficher par</h4> 
                        <select className = 'display-type-select'>
                            <option>Taille</option>
                            <option>Batiment</option>
                        </select>
                    </section>

                    {/*Affichage des salle en fonction de la selection */}
                    <br />
                    <SalleBatiment />

                </section>
            </section>
        </section>
    )
}

export default Ressource