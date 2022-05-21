import React from "react";
import '../../../styles/dashboard/dashboardHeader.css'



function RessourceLinks(){
    return(
        <section className = 'links-container'>
            <span className = 'link' onClick = {() => window.location.href = '/dashboard/'}>Accueil</span>
            <span className = 'link active-sign'>Ressource</span>
            <span className = 'link' onClick = {() => window.location.href = '/dashboard/programmation'}>Programmation</span>
            <span className = 'link'>Réservation</span>
            <span className = 'link'>Messages</span>
        </section>
    )
}


export default RessourceLinks