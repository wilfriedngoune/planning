import React from "react";
import '../../../styles/dashboard/ressource/ressource.css'


function UnitSalle({nom}){
    return(
        <section className = 'unit-salle'>
            <span>{nom}</span>
        </section>
    )
}

export default UnitSalle