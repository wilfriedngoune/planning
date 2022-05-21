import React from "react";
import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import ProgrammationHeader from "./ProgrammationHeader";
import ProgrammationLinks from "./ProgrammationLinks";
import '../../../styles/dashboard/programmation/programmation.css'
import AdminEditableShedule from "./levelShedules/levelShedulesEdition/AdminEditableShedule";


function  Programmation() {
    return(
        <section>
            <section className = 'dashboard-header-container'>
                <Logo />
                <section className = 'links-and-picture'>
                    <ProgrammationLinks />
                    <ProfilPicture />
                </section>
            </section>
            <br /><br /><br />
            <section className = 'programmation-container'>
                <ProgrammationHeader />
                <hr />

                <br /> <br />
                {/* Affichage de l'emplois de temps en fonction des conditions. */}
                <AdminEditableShedule />

            
            </section>
        </section>
    )
    
}


export default Programmation