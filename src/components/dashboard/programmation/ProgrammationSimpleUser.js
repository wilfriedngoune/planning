import React from "react";
import DisplayShedule from "./levelShedules/levelShedulesVisualization/DisplayShedule";
import ProgrammationSimpleUserHeader from "./ProgrammationSimpleUserHeader";



function  ProgrammationSimpleUser() {
    return(
        <section>
            <section className = 'programmation-container'>
                <ProgrammationSimpleUserHeader />
                <hr />

                <br /> <br />
                <section className = 'shedules-container'>
                    {/* Affichage de l'emplois de temps en fonction des conditions. */}
                    <section className = 'level-and-confirm'>
                        <h4>INF-L3</h4>
                    </section>
                    <hr />
                    <br />
                    <DisplayShedule />  
                </section>
                
            </section>
        </section>
    )
    
}


export default ProgrammationSimpleUser