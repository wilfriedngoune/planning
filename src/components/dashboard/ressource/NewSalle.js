import React from "react";
import '../../../styles/dashboard/ressource/add-new-ressource.css'



function NewSalle({setNewSalle}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setNewSalle(false)
    }

    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>Nouvelle salle</div>
                <br />
               
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button'>Enregistrer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default NewSalle