import React from "react";
import '../../../styles/dashboard/programmation/programmation-header.css'

function ProgrammationHeader(){
    return(
        <section className = 'program-header-container'>
            <div className = 'new-program-button' title = 'Nouvel emploi de temps'>+</div>
            <section className = 'select-program-container'>
                <span className = 'select-program-title'>Selectionner un emploi de temps  </span>
                <select className = 'program-header-select'>
                    <option>Annee et semestre ...</option>
                    <option>2020 - S1</option>
                    <option>2020 - S2</option>
                    <option>2021 - S1</option>
                    <option>2021 - S2</option>       
                </select>

                <select className = 'program-header-select'>
                    <option>De ... </option>
                    <option>Cours</option>
                    <option>Controle Continu</option>
                    <option>Session normale</option>     
                </select>

                <select className = 'program-header-select'>
                    <option>Afficher par ...</option>
                    <option>Niveau</option>
                    <option>Salles</option>     
                </select>

                <div className = 'program-header-select-confirm'>Selectionner</div>
            </section>
        </section>
    )
}

export default ProgrammationHeader