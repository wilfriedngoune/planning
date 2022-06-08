import React, { useEffect, useState } from "react";
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
    const [electricite, setElectricite] = useState(1)


    //Envoie des donnees dans la base de donne via l'api

    const handleSubmit = () => {

        axios.post(Url.devUrl() + 'salle',
        {
            "code" : code,
            "nom" : nom,
            "capacite" : capacite,
            "etat_electricite" : electricite,
            "type_salles" : idType,
            "batiments" : idBatiment

        }

        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
    }



    //Tous les batiment de la base
    const[batList, setBatList] = useState([])
    useEffect(() => {
        axios.get(Url.devUrl() + 'batiment',
        ).then((res) =>{
            setBatList(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])


    //Tous les types de la base
    const[typeList, setTypList] = useState([])
    useEffect(() => {
        axios.get(Url.devUrl() + 'typeSalle',
        ).then((res) =>{
            setTypList(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])

    
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
                        batList.map((batiment) => 
                        <option id = {batiment.code} value = {batiment.id}>{batiment.nom}</option>
                        )
                    }
                </select>

                <select className = 'new-ressource-select' id = 'type' onChange = {() => setIdType(document.getElementById('type').value)}> 
                    <option>Type de la salle...</option>
                    {/* Lister la liste de tous les type de salle de la bd */}
                    {
                        typeList.map((type) => 
                        <option id = {type.code} value = {type.id}>{type.nom}</option>
                        )
                    }
                </select>

                <input id = 'code' type = 'text' placeholder = 'code de la salle (ex. S006)' className = 'new-ressource-field' onChange = {() => setCode(document.getElementById('code').value)}/>

                <input type = 'text' id = 'nom' placeholder = 'nom de la salle (ex. Salle N6)' className = 'new-ressource-field' onChange = {() => setNom(document.getElementById('nom').value)}/>

                <input type = 'number' id = 'capacite' placeholder = 'capacite de la salle' className = 'new-ressource-field' onChange = {() => setCapacite(document.getElementById('capacite').value)}/>

                

               <select className = 'new-ressource-select' id = 'electricite' onChange = {() => setElectricite(document.getElementById('electricite').value)}>
                   <option value = {1}>Etat de l'electricite (Oui par defaut)</option>
                   <option value = {1}>Oui</option>
                   <option value = {0}>Non</option>
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