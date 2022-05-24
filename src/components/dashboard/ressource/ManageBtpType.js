import React from "react";


//css
import '../../../styles/dashboard/ressource/add-new-ressource.css'



function ManageBtpType({setManageBtp}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setManageBtp(false)
    }

    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>Batiments et types</div>
                <br />
                
                <br /><br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button'>Enregistrer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default ManageBtpType