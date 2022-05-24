import React from "react";
import '../../../../styles/dashboard/ressource/add-new-ressource.css'



function NewRessource({setNewRessource}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setNewRessource(false)
    }


    let type = [
        {
            'code' : "1", 
            'nom' : "Video projecteur"
        },
        {
            'code' : "2", 
            'nom' : "Vehicule"
        },
        {
            'code' : "3", 
            'nom' : "Espace vert"
        }
    ]
    
    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>Nouvelle ressource</div>
                <br />
               
                <input type = 'text' placeholder = 'Nom de la ressource' className = 'new-ressource-field'/>

                <input type = 'text' placeholder = 'description' className = 'new-ressource-field'/>

                <select className = 'new-ressource-select'>
                    <option>Type...</option>
                    {/* Lister la liste de tous les type de la ressource */}
                    {
                        type.map((type) => 
                        <option id = {type.code}>{type.nom}</option>
                        )
                    }
                </select>
                <br /> <br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button'>Enregistrer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default NewRessource