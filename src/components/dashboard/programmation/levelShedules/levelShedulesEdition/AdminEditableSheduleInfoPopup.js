import axios from "axios";
import React, { useEffect, useState } from "react";

//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'


//Les urls
const Url = require('../../../../../url')

function AdminEditableSheduleInfoPopup({id, caseValue,setModifyCase, setDisplayAdminEdit, idNiveau}){

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
        if(indexOfElt() === -1 && (ue !== '' && enseignant !== '' && salle !== '')){
            //Preciser que quelques chose a ete modifiee
            setModifyCase(true)


            //Chargement des nouvelle valeur dans l'objet
            tmpItem.plage = id
            tmpItem.ue = ue
            tmpItem.enseignant = enseignant
            tmpItem.salle = salle

            //Ajout de l'objet dans le tableau
            finalTable.push(tmpItem)
        }

        else if(indexOfElt() !== -1){
            //Au cas ou il modifie une valeur
            if(ue !== '' || enseignant !== '' || salle !== ''){
                //Preciser que quelques chose a ete modifiee
                setModifyCase(true)

                //Est ce que l'ue a bouge ? si  oui ...
                if(ue !== ''){
                   finalTable[indexOfElt()].ue = ue
                }

                //Est ce que l'enseigant a bouge, si oui ...
                if(ue !== ''){
                    finalTable[indexOfElt()].enseignant = enseignant
                 }

                //Est ce que la salle a bouge, si oui ...
                if(ue !== ''){
                finalTable[indexOfElt()].salle = salle
                }

            }
        }

        setDisplayAdminEdit(false)
        
    }

    //FOnction qui supprime les informations d'une case qui est deja remplie
    const handleCancel = () => {
        
        //On suprime la valeur dans la instantanee en local
        console.log(indexOfElt())
        caseValue.splice(indexOfElt(), 1)

        //On supprime la table dans la base de donnee
        axios.delete(Url.devUrl() + '' 
        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })

        setDisplayAdminEdit(false)
    }




    //Liste des elements qu'on affiche dans les seleect des ue, ens et salle.
    const[ueList, setUeList] = useState([])
    const[enseignantList, setEnseignantList] = useState()
    const[salleList, setSalleList] = useState([])


    //Requette qui recoit tout les ue de la classe demande
    useEffect(() => {
        axios.get(Url.devUrl() + 'classe-notcours/' + idNiveau
        ).then((res) => {
            console.log(res.data[0].cours)
            setUeList(res.data[0].cours)
        }).catch((err) => {
            throw err
        })
    }, [])

    //Requete qui recoit les salles libre et qui peuvent contenir les etudiants de cette classe.
    useEffect(() => {
        axios.post(Url.devUrl() + 'salle-libre',
        {
            'plage' : id,
            "classe" : idNiveau
        },

        ).then((res) => {
            console.log("2eme then", res.data)
            setSalleList(res.data)
            
        }).catch((err) => {
            throw err
        })
    }, [])


    //FOnction qui gere la modification d'une salle
    const handleChangeSalle = (id) => {
        

        //On transforme l'id qu'on a recuperer en code.
        axios.get(Url.devUrl() + 'salle/' + id,
        ).then((res) => {
            console.log(res.data)
            setSalle(res.data.code)
        }).catch((err) => {
            throw err
        })
        
       
    }



    return(
        <section className = 'edit-popup-container'>
            <br /><br /><br /><br /><br /><br /><br />
            <section className = 'edit-popup-box'>
                <div className = 'edit-popup-title'>Editer la case</div>
                <section className = 'edit-element-container'>
                    {/* Pour l'ue */}
                    <select id = 'ue' className = 'edit-element-item' onChange = {() => setUe(document.getElementById('ue').value)}>
                        <option>UE...</option>
                        {ueList.map((element) => 
                        <option>{element.ue}</option>
                        )}
                    </select>


                    {/* Pour l'enseignant */}
                    <select id = 'enseignant' className = 'edit-element-item' onChange = {() => setEnseignant(document.getElementById('enseignant').value)}>
                        <option>Enseignant...</option>
                        <option>Valery Monthe</option>
                        <option>Armel Nzekong</option>
                        <option>Sakwe Albert</option>
                    </select>

                    {/* Pour la salle */}
                    <select id = 'salle' className = 'edit-element-item' onChange = {() => handleChangeSalle(document.getElementById('salle').value)}>
                        <option>Salle...</option>
                        {salleList.map((salle) => 
                        <option  value = {salle.id}>{salle.code}</option>
                        )}
                    </select>
                    
                </section>
                <br />
                {note ? <span className = 'note-message'>{noteMessage}</span> : null}
                <br /><br />
                <section className = 'edit-popup-footer'>
                    <div className = 'edit-popup-button' onClick = {() => handleValidate()}>Valider</div>
                    {indexOfElt() !== -1 ? <div className = 'edit-popup-button red-back' onClick = {() => handleCancel()}>Supprimer</div> : null}

                    <div className = 'edit-popup-button gray-back' onClick = {() => HandleCloseAdminEdit()}>Annuler</div>
                </section>
            </section>
        </section>
    )
}

export default AdminEditableSheduleInfoPopup