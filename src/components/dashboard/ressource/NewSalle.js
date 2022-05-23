import React from "react";
import '../../../styles/dashboard/ressource/add-new-ressource.css'



function NewSalle({setNewSalle}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setNewSalle(false)
    }

    let batiment = [
        {
            'code' : "BP", 
            'nom' : "Bloc pedagogique"
        },
        {
            'code' : "D_M-I", 
            'nom' : "Departement Math - Info"
        },
        {
            'code' : "DP", 
            'nom' : "Departement de Physique"
        }
    ]

    let type = [
        {
            'code' : "SS", 
            'nom' : "Salle simple"
        },
        {
            'code' : "A", 
            'nom' : "Amphitheatre"
        },
        {
            'code' : "ST", 
            'nom' : "Salle de soutenance"
        }
    ]

    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>Nouvelle salle</div>
                <br />
                <input type = 'number' placeholder = 'capacite de la salle' className = 'new-ressource-field'/>

                <input type = 'text' placeholder = 'nom de la salle (ex. S006)' className = 'new-ressource-field'/>

                <input type = 'number' placeholder = 'Etat electrique (1. Oui ou 0. Non)' max = "1" min = "0" className = 'new-ressource-field'/>

                <select className = 'new-ressource-select'>
                    <option>Batiment...</option>
                    {/* Lister la liste de tous les batiment de la bd */}
                    {
                        batiment.map((batiment) => 
                        <option id = {batiment.code}>{batiment.nom}</option>
                        )
                    }
                </select>

                <select className = 'new-ressource-select'>
                    <option>Type de la salle...</option>
                    {/* Lister la liste de tous les type de salle de la bd */}
                    {
                        type.map((type) => 
                        <option id = {type.code}>{type.nom}</option>
                        )
                    }
                </select>

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

export default NewSalle