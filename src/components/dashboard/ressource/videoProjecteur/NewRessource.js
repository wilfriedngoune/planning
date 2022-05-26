import axios from "axios";
import React, { useState } from "react";
import '../../../../styles/dashboard/ressource/add-new-ressource.css'


//css


//Les urls
const Url = require('../../../../url')


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
    
    //variable des valeurs du formulaire de creation d'une nouvelle ressource
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [idType, setIdType] = useState(0)

    //methode qui envoie les donnees dans la base de donnee
    const handleSubmit = () => {
        console.log(nom)
        console.log(description)
        console.log(idType)

        //Axios
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
                <div className = 'salle-name'>Nouvelle ressource</div>
                <br />
               
                <input id = 'nom' type = 'text' placeholder = 'Nom de la ressource' className = 'new-ressource-field' onChange = {() => setNom(document.getElementById('nom').value)}/>

                <input id = 'description' type = 'text' placeholder = 'description' className = 'new-ressource-field' onChange = {() => setDescription(document.getElementById('description').value)}/>

                <select id = 'type' className = 'new-ressource-select' onChange = {() => setIdType(document.getElementById('type').value)}>
                    <option>Type...</option>
                    {/* Lister la liste de tous les type de la ressource */}
                    {
                        type.map((type) => 
                        <option id = {type.code} value = {type.code}>{type.nom}</option>
                        )
                    }
                </select>
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

export default NewRessource