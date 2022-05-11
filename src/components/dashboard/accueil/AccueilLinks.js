import React from "react";
import '../../../styles/dashboard/dashboardHeader.css'



function AccueilLinks(){
    return(
        <section className = 'links-container'>
            <span className = 'link active-sign'>Accueil</span>
            <span className = 'link' onClick = {() => window.location.href = '/dashboard/ressource/salle'}>Ressource</span>
            <span className = 'link'>Programmation</span>
            <span className = 'link'>Réservation</span>
            <span className = 'link'>Messages</span>
        </section>
    )
}


export default AccueilLinks