import React from "react";
import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import ProgrammationHeader from "./ProgrammationHeader";
import ProgrammationLinks from "./ProgrammationLinks";
import '../../../styles/dashboard/programmation/programmation.css'
import AdminEditableShedule from "./levelShedules/levelShedulesEdition/AdminEditableShedule";
import SaveAdminModification from "./levelShedules/levelShedulesEdition/SaveAdminModification";


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
                <section className = 'shedules-container'>
                    {/* Affichage de l'emplois de temps en fonction des conditions. */}
                    <section className = 'level-and-confirm'>
                        <h4>INF-L3</h4>
                        <SaveAdminModification />
                    </section>
                    <hr />
                    <br />
                    <AdminEditableShedule />    
                </section>
                

            
            </section>
        </section>
    )
    
}


export default Programmation