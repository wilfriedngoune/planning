import React, { useState } from "react";
import axios from 'axios';


//css
import '../../../styles/dashboard/ressource/info-salle.css'


//Les Urls
const Url = require('../../../url')

function InfoSalle({idSalle, code, batiment, capCours, type, electricite, setSalleClick}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setSalleClick(false)
    }



    //Etat de la variable qui permet de modiifier une salle
    const [updateSalle, setUpdateSalle] = useState(false)

     //fonction qui affiche les formulaires de modification
    const handleUpdate = () => {
        updateSalle ? setUpdateSalle(false) : setUpdateSalle(true)
    }




    //Etats des variable qui seront envoye dans le formulaire
    const [newcode, setCode] = useState(code)
    const [newcapacite, setCapacite] = useState(capCours)
    const [newelec, setElect] = useState(electricite)
    const [newbatiment, setBatiment] = useState(batiment)
    const [newtype, setType] = useState('')



    //Methode qui envoie les donnee du formulaire
    const handleValidUpdate = () => {
        setSalleClick(false)
        axios.put(Url.devUrl(),

            {

            }
        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
    }


    //Variable de type et de batiment

    let btp = [
        {
            'code' : 1,
            'nom' : 'Bloc pedagogique'
        },

        {
            'code' : 2,
            'nom' : 'Departement de Math'
        },

        {
            'code' : 3,
            'nom' : 'Departement physique'
        },

    ]



    let typ = [
        {
            'code' : 1,
            'nom' : 'Salle simple'
        },

        {
            'code' : 2,
            'nom' : 'Amphitheatre'
        },

        {
            'code' : 3,
            'nom' : 'Salle soutenance'
        },

    ]

    //Suppression d'une salle
    const handleDelete = () => {
        axios.post(Url.devUrl() + '' + idSalle,

        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
        setSalleClick(false)

    }


    return(
        <section className = 'infosalle-container'>
            <br /><br /><br />
            <section className = 'info-salle-popup'>
                <div className = 'salle-name'>{code} <br />
                {updateSalle ? <input id = 'nom' type = 'text' className = 'update-field' placeholder = {code} onChange = {() => setCode(document.getElementById('nom').value)}/> : null}
                </div>
                
                <br />
                <section className = 'info-and-form'>
                    <div className = 'salle-info'>Capacite : <b>{capCours}</b></div>
                    {updateSalle ? <input id = 'capacite' type = 'number' className = 'update-field' placeholder = {capCours} onChange = {() => setCapacite(document.getElementById('capacite').value)}/> : null}
                </section>
                
                <section className = 'info-and-form'>
                    <div className = 'salle-info'>Electricité : <b>{electricite}</b> </div>
                    {updateSalle ? <select className = 'update-field' id = 'electricite' onChange = {() => setElect(document.getElementById('electricite').value)}>
                        <option>Oui</option>
                        <option>Non</option>
                    </select> : null}
                </section>

                <section className = 'info-and-form'>
                    <div className = 'salle-info'>Situé au <b>{batiment}</b> </div>
                    {updateSalle ? <select id = 'batiment' className = 'update-select' onChange = {() => setBatiment(document.getElementById('batiment').value)}>
                        <option>Batiment</option>
                        {
                            btp.map((btp) => 
                            <option id = {btp.code}>{btp.nom}</option>
                            )
                        }
                    </select> : null}
                </section>

                <section className = 'info-and-form'>
                    <div className = 'salle-info'>Type de la salle <b>{type}</b> </div>
                    {updateSalle ? <select id = 'type' className = 'update-select' onChange = {() => setType(document.getElementById('type').value)}>
                        <option>Type</option>
                        {
                            typ.map((typ) => 
                            <option id = {typ.code}>{typ.nom}</option>
                            )
                        }
                    </select> : null}
                </section>
                
                {updateSalle ? <div className = 'valid-update' onClick = {() => handleValidUpdate()}>Confirmer</div> : null}

                <br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button' onClick = {() => handleUpdate()}>Modifier</div>
                    <div className = 'salle-info-button red-back' onClick = {() => handleDelete()}>Supprimer</div>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default InfoSalle