import axios from "axios";
import React, { useEffect, useState } from "react";

//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'


//Les urls
const Url = require('../../../../../url')

function AdminEditableSheduleInfoPopup({id, caseValue,setTmpCaseValue, setDisplayAdminEdit, idNiveau}){

    //fonction qui ferme la popup d'edition en cas d'annulation
    const HandleCloseAdminEdit = () => {
        setDisplayAdminEdit(false)
    }

    

    //Etat des variables instantanement modifie
    const [ue, setUe] = useState('')
    const [enseignant, setEnseignant] = useState('')
    const [salle, setSalle] = useState('')

    //Etat de la note, et du message de la remarque
    const [note, setNote] = useState(false)
    const [noteMessage, setNoteMessage] = useState('Tout est ok')

    //fonction pour verifier si une case est remplie ou pas -1 si non et index si oui.
    const indexOfElt = () => {
        let index = -1
        for(let i = 0; i < caseValue.length; i++){
            if(id === caseValue[i].plage){
                index = i
            }
        }
        return index
    }

    

    //fonction qui valide la modification d'une case
    const handleValidate = () => {
        //Tableau finale de la fin de l'operation
        let finalTable = caseValue

        //objet temporelle de la nouvelle case
        let tmpItem = {}


        //on verifie que si la case est vide, on fait un ajout
        if(indexOfElt() === -1 && (ue !== '' && enseignant !== '' &&salle !== '')){
            //Chargement des nouvelle valeur dans l'objet
            tmpItem.plage = id
            tmpItem.ue = ue
            tmpItem.enseignant = enseignant
            tmpItem.salle = salle

            //Ajout de l'objet dans le tableau
            finalTable.push(tmpItem)
        }

        if(indexOfElt() !== -1){
            //Au cas ou il modifie une valeur
            if(ue !== '' || enseignant !== '' || salle !== ''){
                tmpItem.plage = id

                ue === '' ? tmpItem.ue = caseValue[indexOfElt()].ue : tmpItem.ue = ue

                enseignant === '' ? tmpItem.enseignant = caseValue[indexOfElt()].enseignant : tmpItem.enseignant = enseignant


                salle === '' ? tmpItem.salle = caseValue[indexOfElt()].salle : tmpItem.salle = salle

                
                //Ajout de l'objet dans le tableau
                finalTable.push(tmpItem)
            }
        }

        setDisplayAdminEdit(false)
        
    }

    //Liste des elements qu'on affiche dans les seleect des ue, ens et salle.
    const[ueList, setUeList] = useState()
    const[enseignantList, setEnseignantList] = useState()
    const[salleList, setSalleList] = useState()


    //Requette qui recoit tout les ue de la classe demande
    useEffect(() => {
        axios.get(Url.devUrl() + ''
        ).then((res) => {
            console.log(res)
        }).catch((err) => {
            throw err
        })
    }, [])

    return(
        <section className = 'edit-popup-container'>
            <br /><br /><br /><br /><br /><br /><br />
            <section className = 'edit-popup-box'>
                <div className = 'edit-popup-title'>Editer la case</div>
                <section className = 'edit-element-container'>
                    {/* Pour l'ue */}
                    <select id = 'ue' className = 'edit-element-item' onChange = {() => setUe(document.getElementById('ue').value)}>
                        <option>UE...</option>
                        <option>INF3015</option>
                        <option>INF3025</option>
                        <option>INF3036</option>
                        <option>ENG3035</option>
                    </select>


                    {/* Pour l'enseignant */}
                    <select id = 'enseignant' className = 'edit-element-item' onChange = {() => setEnseignant(document.getElementById('enseignant').value)}>
                        <option>Enseignant...</option>
                        <option>Valery Monthe</option>
                        <option>Armel Nzekong</option>
                        <option>Sakwe Albert</option>
                    </select>

                    {/* Pour la salle */}
                    <select id = 'salle' className = 'edit-element-item' onChange = {() => setSalle(document.getElementById('salle').value)}>
                        <option>Salle...</option>
                        <option>A250</option>
                        <option>A3</option>
                        <option>A350</option>
                        <option>R108</option>
                    </select>
                    
                </section>
                <br />
                {note ? <span className = 'note-message'>{noteMessage}</span> : null}
                <br /><br />
                <section className = 'edit-popup-footer'>
                    <div className = 'edit-popup-button' onClick = {() => handleValidate()}>Valider</div>
                    <div className = 'edit-popup-button red-back' onClick = {() => HandleCloseAdminEdit()}>Annuler</div>
                </section>
            </section>
        </section>
    )
}

export default AdminEditableSheduleInfoPopup