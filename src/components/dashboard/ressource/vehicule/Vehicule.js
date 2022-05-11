import React from "react";
import '../../../../styles/dashboard/dashboardHeader.css'
import ProfilPicture from "../../dashboardHeader/ProfilPicture";
import Logo from "../../dashboardHeader/Logo";
import LatBar from "../LatBar";
import RessourceLinks from "../RessourceLinks";



function Vehicule(){
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
                {/*Le nom c'est pour ajouter le signe de la page active */}
                <LatBar nom = 'salle' />


                <section className = 'right-side'>

                    <section className = 'right-side-header'>
                        <span className = 'title'>Les vehicules</span>
                        <section className = 'new-salle-and-search'>
                            <div className = 'new-salle'>Nouveau vehicule</div>
                            <input type = 'search' placeholder = 'Rechercher un VP' className = 'new-salle search-field' />
                        </section>
                    </section>

                    {/*Type d'affichage des salles*/}
                   
                    

                </section>
            </section>
        </section>
    )
}

export default Vehicule