import React from "react";
import ProgrammationHeader from "./ProgrammationHeader";
import '../../../styles/dashboard/programmation/programmation.css'
import AdminEditableShedule from "./levelShedules/levelShedulesEdition/AdminEditableShedule";
import SaveAdminModification from "./levelShedules/levelShedulesEdition/SaveAdminModification";



function  ProgrammationAdmin() {
    return(
        <section>
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


export default ProgrammationAdmin