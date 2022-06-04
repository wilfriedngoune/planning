import axios from "axios";
import React, { Fragment } from "react";


// css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import ForgetSave from "./ForgetSave";

//Les Urls
const Url = require('../../../../../url')




function SaveAdminModification({displayForgetPop, finalCaseValue, modifyCase, idNiveau}){

    //FOnction pour enregistrer les modifications
    const handleSave = () => {

        //On verifie d'abord si il ya eu bel et bien une modification..
        if(modifyCase){
            console.log(finalCaseValue)
            axios.post(Url.devUrl() + '',
                {
                    idClasse : idNiveau, 
                    cours : finalCaseValue   
                }

            ).then((res) => {
                console.log(res)
            }).catch((err) => {
                throw err
            })
        }

        else{
            console.log("Aucune modification n'a ete faite.")
        }
    }


    return(
        <Fragment>
            <section className = 'save-edit' onClick = {() => handleSave()}>
                Enregitrer les modifications
            </section>
            {/* Affichage en cas d'oublie */}
            {displayForgetPop ? <ForgetSave finalCaseValue = {finalCaseValue} modifyCase = {modifyCase} idNiveau = {idNiveau}/> : null}
        </Fragment>
    )

}

export default SaveAdminModification