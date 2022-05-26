import React, { useState } from "react";
import axios from "axios";

//css
import '../../../styles/dashboard/ressource/add-new-ressource.css'


//Les Urls
const Url = require('../../../url')




function NewSalle({setNewSalle}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setNewSalle(false)
    }

    //Etat des valeurs du formulaire qui seront envoye
    const [idBatiment, setIdBatiment] = useState('')
    const [idType, setIdType] = useState('')
    const [nom, setNom] = useState('')
    const [code, setCode] = useState('')
    const [capacite, setCapacite] = useState(0)
    const [electricite, setElectricite] = useState('')


    //Envoie des donnees dans la base de donne via l'api

    const handleSubmit = () => {
        console.log(idBatiment)
        console.log(idType)
        console.log(nom)
        console.log(code)
        console.log(capacite)
        console.log(electricite)

        axios.post(Url.devUrl(),
        {

        }

        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
    }





    //Valeur temporaire des batiment et salle de la base de donne
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
                <select className = 'new-ressource-select' id = 'batiment' onChange = {() => setIdBatiment(document.getElementById('batiment').value)}>
                    <option>Batiment...</option>
                    {/* Lister la liste de tous les batiment de la bd */}
                    {
                        batiment.map((batiment) => 
                        <option id = {batiment.code} value = {batiment.code}>{batiment.nom}</option>
                        )
                    }
                </select>

                <select className = 'new-ressource-select' id = 'type' onChange = {() => setIdType(document.getElementById('type').value)}> 
                    <option>Type de la salle...</option>
                    {/* Lister la liste de tous les type de salle de la bd */}
                    {
                        type.map((type) => 
                        <option id = {type.code} value = {type.code}>{type.nom}</option>
                        )
                    }
                </select>

                <input id = 'code' type = 'text' placeholder = 'code de la salle (ex. S006)' className = 'new-ressource-field' onChange = {() => setCode(document.getElementById('code').value)}/>

                <input type = 'text' id = 'nom' placeholder = 'nom de la salle (ex. Salle N6)' className = 'new-ressource-field' onChange = {() => setNom(document.getElementById('nom').value)}/>

                <input type = 'number' id = 'capacite' placeholder = 'capacite de la salle' className = 'new-ressource-field' onChange = {() => setCapacite(document.getElementById('capacite').value)}/>

                

               <select className = 'new-ressource-select' id = 'electricite' onChange = {() => setElectricite(document.getElementById('electricite').value)}>
                   <option value = 'Oui'>Etat de l'electricite (Oui par defaut)</option>
                   <option>Oui</option>
                   <option>Non</option>
               </select>

                

                <br /><br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button' onClick = {() => handleSubmit()}>Enregistrer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default NewSalle