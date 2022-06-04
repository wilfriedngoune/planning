import axios from "axios";
import React, { useEffect, useState } from "react";


import '../../../styles/dashboard/programmation/programmation-header.css'

//Les urls
const Url = require('../../../url')


function ProgrammationHeader({setDisplayShedule, setIdNiveau, setDisplayLoader, setClasseTable, modifyCase, setDisplayForgetPop}){

    //Variable qui contient tous les depatement de la base de donnee
    const [departement, setDepartement] = useState([])
    useEffect(() => {
        axios.get(Url.devUrl() + 'departement'
        ).then((res) => {
            setDepartement(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])



    //Variable qui contient toutes les salles de la fac
    const [niveau, setNiveau] = useState([])
    useEffect(() => {
        axios.get(Url.devUrl() + 'classe'
        ).then((res) => {
            setNiveau(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])


    

    //ETat de la variable qui contient la filiere a un instant T
    const [instantFiliere, setInstantFiliere] = useState(0)
   //pour le niveau ici juste de cette section
   const[idClasse, setIdClasse] = useState(0)

   //Fonction qui handle le bouton selectionner
   const handleSelectionner = () => {
       
        //On attends quelques seconde avant d'afficher l'emplois de temps
        setTimeout(() => {
            if(idClasse != 0){
                setDisplayLoader(false)
                setDisplayShedule(true)   
            }
        }, 200)
        
   }

    //Variable qui active le bouton selectionner..
    const[selectionBtn, setSelectionBtn] = useState(false)

    //Fonction qui prend cherche les donnees dans la base de donne et met a jours la variable 
    
    useEffect(() => {
        axios.get(Url.devUrl() + 'classe-cours/' + idClasse
        ).then((res) => {
            setSelectionBtn(true)
            console.log(res.data[0])
            setClasseTable(res.data[0])
        }).catch((err) => {
            throw err
        })
    }, [idClasse])

   

    //Handle le changement d'une classe
    const handleChangeClasse = (e) => {
        //Si des modification on ete effectuee
        if(modifyCase){
            setDisplayForgetPop(true)
        }
        else{
            //On affiche d'abord le Loader
            setDisplayLoader(true)

            //Mise a jour de la classe
            setIdClasse(e)
            setIdNiveau(e)

            //desactivation de l'affichage du scheduler
            setDisplayShedule(false)

            //desactivation de l'affichage du scheduler
            setSelectionBtn(false)

            // setTimeout(() => {
            //     //Activer le bouton de selection
            //     setSelectionBtn(true)
            // }, 800)
        }
    }

    return(
        <section className = 'program-header-container'>
            <div className = 'new-program-button' title = 'Nouvel emploi de temps'>+</div>
            <section className = 'select-program-container'>
                <span className = 'select-program-title'>Selectionner un emploi de temps  </span>
                <select id = 'filiere' className = 'program-header-select' onChange = {() => setInstantFiliere(document.getElementById('filiere').value)}>
                    <option>Filiere</option>
                    {
                        departement.map((filiere) => 
                        <option id = {filiere.id} value = {filiere.id}>{filiere.nom}</option>
                        )
                    }       
                </select>

                <select id = 'niveau' className = 'program-header-select' onChange = {() => handleChangeClasse(document.getElementById('niveau').value)} >
                    <option>Classe</option>
                    {
                        niveau.map((niveau) => 
                        niveau.departements == instantFiliere ? <option id = {niveau.id} value = {niveau.id}>{niveau.code}</option> : null
                        )
                    }
                         
                </select>


                {selectionBtn ? <div className = 'program-header-select-confirm' onClick = {() => handleSelectionner()}>Selectionner</div> : null}
            </section>
        </section>
    )
}

export default ProgrammationHeader