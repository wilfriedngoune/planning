import React from "react";
import '../../../styles/dashboard/programmation/programmation-header.css'

function ProgrammationSimpleUserHeader(){
    return(
        <section className = 'program-header-container'>
            <section className = 'select-program-container'>
                <span className = 'select-program-title'>Selectionner un emploi de temps  </span>

                <select className = 'program-header-select'>
                    <option>De ... </option>
                    <option>Cours</option>
                    <option>Examen</option>
                    <option>TD</option>     
                </select>

                <select className = 'program-header-select'>
                    <option> Afficher le ...</option>
                    <option>General</option>
                    <option>Pour moi</option>     
                </select>

                <div className = 'program-header-select-confirm'>Selectionner</div>
            </section>
        </section>
    )
}

export default ProgrammationSimpleUserHeader