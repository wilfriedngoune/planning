import React, { useState } from "react";
import axios from "axios";



//css
import '../../../styles/dashboard/ressource/add-new-ressource.css'


//Les Urls
const Url = require('../../../url')





function ManageBtpType({setManageBtp}){

    //Fermeture de la popup
    const handleCloseInfo = () => {
        setManageBtp(false)
    }

    //Etat de la variable qui affiche soit pour la modification ou la suppression
    const[modif, setModif] = useState(true)
    //Etat de la varable qui change l'element a supprimer
    const[displayBtp, setDisplayBtp] = useState(false)
    const[displayType, setDisplayType] = useState(false)

    //url et id necessaire pour la suppression
    const[url, setUrl] = useState('')
    const[id, setId] = useState('')
    //Erreur en cas d'element vide pour la suppression
    const[err, setErr] = useState(false)


    //Fonction qui handle le onchange du type d'element
    const handleChangeElement = (e) => {
        if (e === 'Type') {
            //Desactivation et activation de select a afficher
            setDisplayBtp(false)
            setDisplayType(true)
            
            //Choix de la bonne url de l'api
            setUrl('')
        }
        if(e === 'Batiment'){
            //Desactivation et activation de select a afficher
            setDisplayType(false)
            setDisplayBtp(true)

            //Choix de la bonne url de l'api
            setUrl('')
        }
        
    }

    //Etat de variable des element du formulaire
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [urlNew, setUrlNew] = useState('')
    const [error, setError] = useState(false)

    //fonction qui modifie l'url pour la creation d'un nouveau element
    const handleChangeUrlNew = (e) => {
        if(e === 'Batiment'){
            setUrlNew('batiment/')
        }
        if(e === 'Type'){
            setUrlNew('typeSalle/')
        }
        
    }

    //Fonction qui supprime l'element
    const HandleDelete = () => {
        if(id === ''){
            setErr(true)
        }
        else{
            axios.put(Url.devUrl() + url + id, 
            ).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                throw err
            })
        }
    }

    //Fonction qui cree un nouveau element
    const handleNewElement = () => {
        if (urlNew === '') {
            setError(true)
        }
        else{
        axios.post(Url.devUrl(),
            {
                'nom' : nom,
                'description' : description
            } 
            ).then((res) => {
                console.log(res.data)
            }).catch((err) =>{
                throw err
            })
        }
    }

    //liste provisoire des elt
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
                <div className = 'salle-name'>Batiments et type</div>
                <h5>Selectionner l'operation (Nouveau par defaut)</h5>
                <section className = 'salle-info-footer'>
                    <div className = 'salle-info-button' onClick = {() => setModif(true)}>Nouveau</div>
                    <div className = 'salle-info-button' onClick = {() => setModif(false)}>Supprimer</div>
                </section>
                <br />


                {/* Lorsqu'il clique sur nouveau */}

                {modif ? <section>
                    {/* Selection de ce que le user veut gerer */}
                    <select id = 'element' className = 'new-ressource-select' onClick = {() => handleChangeUrlNew(document.getElementById('element').value)}>
                        <option>Batiment ou type de salle</option>
                        <option>Batiment</option>
                        <option>Type</option>
                    </select>

                    <input id = 'nom' type = 'text' className = 'new-ressource-field' placeholder = 'Nom' onChange = {() => setNom(document.getElementById('nom').value)}/>

                    <input id = 'description' type = 'text' className = 'new-ressource-field' placeholder = 'Description ou localisation' onChange = {() => setDescription(document.getElementById('description').value)} />

                    <section className = 'salle-info-footer'>
                        <div className = 'salle-info-button' onClick = {() => handleNewElement()}>Enregistrer</div>
                        {error ? <span className = 'display-error'>Erreur !! Selectionner un element</span> : null}
                    </section>
                </section> :
                <section>
                    <select id = 'element' className = 'new-ressource-select' onChange = {() => handleChangeElement(document.getElementById('element').value)}>
                        <option>Batiment ou type de salle</option>
                        <option>Batiment</option>
                        <option>Type</option>
                    </select>

                    {displayType ? <select id = 'type' className = 'new-ressource-select' onChange = {() => setId(document.getElementById('type').value)}>
                        <option>Type de la salle...</option>
                        {/* Lister la liste de tous les type de salle de la bd */}
                        {
                            type.map((type) => 
                            <option id = {type.code}>{type.nom}</option>
                            )
                        }
                    </select> : null }
                
                    {displayBtp ? <select id = 'btp' className = 'new-ressource-select' onChange = {() => setId(document.getElementById('btp').value)}>
                    <option>Batiment...</option>
                    {/* Lister la liste de tous les batiment de la bd */}
                    {
                        batiment.map((batiment) => 
                        <option id = {batiment.code} value = {batiment.code}>{batiment.nom}</option>
                        )
                    }
                    </select> : null }
                    <br /><br />
                    <section className = 'salle-info-footer'>
                        <div className = 'salle-info-button red-back' onClick = {() => HandleDelete()}>Supprimer</div>
                    {err ? <span className = 'display-error'>Erreur !! Selectionner un element</span> : null}
                    </section>

                </section> }


                <br /><br />
                {/*Les boutons du footer */}
                <section className = 'salle-info-footer cancel-for-btp-typ'>
                    <div className = 'salle-info-button gray-back' onClick = {() => {handleCloseInfo()}}>Annuler</div>
                    
                </section>
            </section>
        </section>
    )
}

export default ManageBtpType