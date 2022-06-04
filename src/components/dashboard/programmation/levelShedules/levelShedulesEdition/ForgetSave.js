import React from "react"
import axios from "axios"



//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'

//Les Urls
const Url = require("../../../../../url")





function ForgetSave({finalCaseValue, modifyCase, idNiveau}){

    //Fonction annuler les modifications
    const handleCancel = () => {    
        //Actualisation le navigateur...
        window.location.reload()
    }

    //Fonction enregistrer les modifications
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
        <section className = 'edit-popup-container small-font'>
            <br /><br /><br />
            <section className = 'edit-popup-box'>
                Vous avez fait des modifications sans les enregistrer. Comment voulez vous continuer ?
                <br /><br />
                <section className = 'edit-popup-footer'>
                    <div className = 'edit-popup-button width-auto' onClick = {() => handleSave()}> Enregistrer les modifications</div>
                    <div className = 'edit-popup-button width-auto' onClick = {() => handleCancel()}> Annuler les modifications</div>
                </section>
            </section>
            
        </section>
    )
}


export default ForgetSave