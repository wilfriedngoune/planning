import React, { Fragment } from "react";

//css
import '../../../../styles/dashboard/ressource/add-new-ressource.css'



function InfoRessource({id, nom, description, setDisplayInfo}){
    return(
        <section className = 'infosalle-container'>
            <br /><br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>{nom}</div>
                <br />
                <div className = 'ressource-info'><b>Description</b> :  {description}</div>
                <br />
                <div className = 'salle-info-button gray-back' onClick = {() => setDisplayInfo(false)}>Annuler</div>
            </section>
            
        </section>
    )
}

export default InfoRessource