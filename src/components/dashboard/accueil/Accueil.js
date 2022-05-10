import React from "react";
import '../../../styles/dashboard/dashboardHeader.css'
import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import AccueilLinks from "./AccueilLinks";

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
            
        </section>
    )
}


export default Accueil