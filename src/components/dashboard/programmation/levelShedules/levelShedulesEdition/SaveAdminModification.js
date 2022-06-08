import axios from "axios";
import React, { Fragment, useState } from "react";


// css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import ForgetSave from "./ForgetSave";

//Les Urls
const Url = require('../../../../../url')




function SaveAdminModification({displayForgetPop, finalCaseValue, modifyCase, idNiveau}){

    //FOnction pour enregistrer les modifications
    const handleSave = () => {
        //On active le loader 
        setLoadForSuccess(true)
        //On verifie d'abord si il ya eu bel et bien une modification..
        if(modifyCase){
            console.log(finalCaseValue)
            axios.post(Url.devUrl() + '',
                {
                    idClasse : idNiveau, 
                    cours : finalCaseValue   
                }

            ).then((res) => {
                //Activation du message et desactivation du Loader
                setLoadForSuccess(false)
                setSuccesMessage(true)
                console.log(res)
            }).catch((err) => {
                throw err
            })
        }

        else{
            console.log("Aucune modification n'a ete faite.")
        }
    }

    //Variable qui affiche que les modification ont ete faites avec succes.
    const[succesMessage, setSuccesMessage] = useState(false)
    const[loadForSucces, setLoadForSuccess] = useState(false)

    return(
        <Fragment>
            {succesMessage ? <div className = 'note-message'>Modifications effectuees avec succes !!</div> : null}

            {loadForSucces ? <div className = 'note-message'>Loading...</div> : null}

            <section className = 'save-edit' onClick = {() => handleSave()}>
                Enregitrer les modifications
            </section>
            {/* Affichage en cas d'oublie */}
            {displayForgetPop ? <ForgetSave finalCaseValue = {finalCaseValue} modifyCase = {modifyCase} idNiveau = {idNiveau}/> : null}
        </Fragment>
    )

}

export default SaveAdminModification