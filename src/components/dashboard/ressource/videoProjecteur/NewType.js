import React from "react";
import '../../../../styles/dashboard/ressource/add-new-ressource.css'



function NewType({setNewType}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setNewType(false)
    }

    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>Nouveau type de ressource</div>
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

export default NewType