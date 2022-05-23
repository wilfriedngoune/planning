import React from "react";
import '../../../styles/dashboard/dashboardHeader.css'



function ProgrammationLinks(){
    return(
        <section className = 'links-container'>
            <span className = 'link' onClick = {() => window.location.href = '/dashboard'}>Accueil</span>
            <span className = 'link' onClick = {() => window.location.href = '/dashboard/ressource/salle'}>Ressource</span>
            <span className = 'link active-sign'>Programmation</span>
            <span className = 'link'>Réservation</span>
            <span className = 'link'>Messages</span>
        </section>
    )
}


export default ProgrammationLinks