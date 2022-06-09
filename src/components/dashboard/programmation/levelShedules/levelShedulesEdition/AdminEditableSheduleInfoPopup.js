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
    const [valideBtn, setValideBtn] = useState(false) //affichage du bouton valide
    const [occupiedInfo, setOccupiedInfo] = useState('')

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
    //variable pour faire l'update dans la bd
    const[idCaseForUpdateBD, setIdCaseForUpdateBD] = useState(0)
    const[idEnseignantBD, setIdEnseignantBD] = useState(0)
    const[idSalleBD, setIdSalleBD] = useState(0)
    const[idUeBD, setIdUeBD] = useState(0)
    

    const handleValidate = () => {
        //Update dans la base de donnee directement
        
        //verifie si la case est deja remplis
        if(indexOfElt() !== -1){
            setIdCaseForUpdateBD(caseValue[indexOfElt()].id)
            
        }
        
        if(ue !== '' || enseignant !== '' || salle !== ''){
            axios.put(Url.devUrl() + 'cours-programme/' + idCaseForUpdateBD,

            {
                "ues" : idUeBD,
                'classes' : idNiveau,
                'enseignants' : idEnseignantBD,
                'salles' : idSalleBD,
                'plages' : id
            }

            ).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                throw err
            })
        }

        //Update instantannee..
        let tmpItem = {}

        //On verifie si la case est vide
        if(indexOfElt() === -1){
            if(ue !== '' && enseignant !== '' && salle !== ''){
                //Chargement des nouvelle valeur dans l'objet
                tmpItem.plage = id
                tmpItem.ue = ue
                tmpItem.enseignant = enseignant
                tmpItem.salle = salle

                //Ajout de l'objet dans le tableau
                caseValue.push(tmpItem)
            }
        }
        else{
            //Au cas ou il modifie une valeur
            if(ue !== '' || enseignant !== '' || salle !== ''){
                //Est ce que l'ue a bouge ? si  oui ...
                if(ue !== ''){
                caseValue[indexOfElt()].ue = ue
                }

                //Est ce que l'enseigant a bouge, si oui ...
                if(enseignant !== ''){
                    caseValue[indexOfElt()].enseignant = enseignant
                }

                //Est ce que la salle a bouge, si oui ...
                if(salle !== ''){
                caseValue[indexOfElt()].salle = salle
                }
            }

        }




        setDisplayAdminEdit(false)
        
    }


    //FOnction qui supprime les informations d'une case qui est deja remplie
    const handleCancel = () => {
        

        //On supprime la table dans la base de donnee
        axios.put(Url.devUrl() + 'cours-programme/' + caseValue[indexOfElt()].id,
        {
            'enseignants' : caseValue[indexOfElt()].idEnseignant,
            'salles' : null,
            'plages' : null,
            'ues' : caseValue[indexOfElt()].idUe,
            'classes' : idNiveau,
        }

        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })

        //On suprime la valeur dans la instantanee en local
        caseValue.splice(indexOfElt(), 1)

        setDisplayAdminEdit(false)
    }




    //Liste des elements qu'on affiche dans les seleect des ue, ens et salle.
    const[ueList, setUeList] = useState([])
    const[enseignantList, setEnseignantList] = useState([])
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


    //Requete qui envoie les enseignant d'une UE
    useEffect(() => {
        axios.get(Url.devUrl() + 'ue-depart-enseignant/' + idUeBD,

        ).then((res) => {
            console.log(res.data)
            setEnseignantList(res.data)
        }).catch((err) => {
            throw err
        })
    }, [idUeBD])


    //FOnction qui gere la modification d'une salle
    const handleChangeSalle = (id) => {
        //Mise a jour de la variable pour la salle
        setIdSalleBD(id)

        //On transforme l'id qu'on a recuperer en code.
        axios.get(Url.devUrl() + 'salle/' + id,
        ).then((res) => {
            console.log(res.data)
            setSalle(res.data.code)
        }).catch((err) => {
            throw err
        })
        
       
    }

    //FOnction qui gere le onchange d'une UE
    const handleChangeUe = (id) => {
        //On met deja a jour l'id de la base de donnee
        setIdCaseForUpdateBD(id)
        
        

        //On transforme l'id qu'on a recuperer en code.
        axios.get(Url.devUrl() + 'cours-programme/' + id,
        ).then((res) => {
            setUe(res.data.ues.code)
            //MIse a joue de la variable qui constient l'id de l'ue
            setIdUeBD(res.data.ues.id)
        }).catch((err) => {
            throw err
        })
        
       
    }


    //Fonction qui change l'enseignant
    const handleChangeEnseignant = (idEns) => {
        //Mise a jour de la variable pour les enseignant
        setIdEnseignantBD(idEns)

        //Recherche du nom de cet enseignant dans la base de donne
        axios.get(Url.devUrl() + 'enseignant/' + idEns,
        ).then((res) => {
            console.log(res.data)
            setEnseignant(res.data.noms)
        }).catch((err) => {
            throw err
        })


        //verification si l'enseignant est disponible avant a cette heure
        axios.post(Url.devUrl() + 'enseignant-libre',
        {
            'plages' : id,
            'enseignants': idEns, 
        } 
        ).then((res) => {
            console.log(id)
            console.log(idEns)
            console.log(res.data)
            if(res.data[0].result){
                setValideBtn(false)
                setNote(true)
                setOccupiedInfo(res.data[0].message)
            }
            else{
                setNote(false)
                setValideBtn(true)
            }
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
                    <select id = 'ue' className = 'edit-element-item' onChange = {() => handleChangeUe(document.getElementById('ue').value)}>
                        <option>UE...</option>
                        {ueList.map((element) => 
                        <option value = {element.id}>{element.ue}</option>
                        )}
                    </select>


                    {/* Pour l'enseignant */}
                    <select id = 'enseignant' className = 'edit-element-item' onChange = {() => handleChangeEnseignant(document.getElementById('enseignant').value)}>
                        <option>Enseignant...</option>
                        {enseignantList.map((element) => 
                        <option value = {element.idEnseignant}>{element.enseignant}</option>
                        )}
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
                {note ? <span className = 'note-message'>Enseignant deja occupé {occupiedInfo}</span> : null}
                <br /><br />
                <section className = 'edit-popup-footer'>
                    {valideBtn ? <div className = 'edit-popup-button' onClick = {() => handleValidate()}>Valider</div> : null}
                    {indexOfElt() !== -1 ? <div className = 'edit-popup-button red-back' onClick = {() => handleCancel()}>Supprimer</div> : null}

                    <div className = 'edit-popup-button gray-back' onClick = {() => HandleCloseAdminEdit()}>Annuler</div>
                </section>
            </section>
        </section>
    )
}

export default AdminEditableSheduleInfoPopup