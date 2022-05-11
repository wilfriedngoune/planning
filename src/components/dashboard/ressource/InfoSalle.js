import React from "react";
import '../../../styles/dashboard/ressource/info-salle.css'



function InfoSalle({nom, batiment, capCours, capExam, electricite, setSalleClick}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setSalleClick(false)
    }
    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>{nom}</div>
                <br />
                <div className = 'salle-info'><b>{capCours}</b> places pour le cours </div>
                <div className = 'salle-info'><b>{capExam}</b> places pour les examens </div>
                <div className = 'salle-info'>Electricité <b>{electricite}</b> </div>
                <div className = 'salle-info'>Situé au <b>{batiment}</b> </div>
                <br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button'>Modifier</div>
                    <div className = 'salle-info-button red-back'>Supprimer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default InfoSalle