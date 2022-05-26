import axios from "axios";
import React, { useState } from "react";



//Css
import '../../../../styles/dashboard/ressource/add-new-ressource.css'



//Les urls
const Url = require('../../../../url')



function NewType({setNewType}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setNewType(false)
    }


    //COnstance des variables pour la creation d'un nouveau type de ressource.
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')

    //Envoie des donnees via l'api, pour remplir la base de donnee
    const handleSubmit = () => {
        console.log(nom)
        console.log(description)
        
        axios.post(Url.devUrl(),
            {

            }
        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
    }


    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>Nouveau type de ressource</div>
                <br />
               
                <input id = 'nom' type = 'text' placeholder = 'Nom du type' className = 'new-ressource-field' onChange = {() => setNom(document.getElementById('nom').value)} />

                <input type = 'text' id = 'description' placeholder = 'description' className = 'new-ressource-field'  onChange = {() => setDescription(document.getElementById('description').value)}/>
                <br /> <br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button' onClick = {() => handleSubmit()}>Enregistrer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default NewType