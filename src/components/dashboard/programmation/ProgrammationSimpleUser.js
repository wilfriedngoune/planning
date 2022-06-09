import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";


//composants
import DisplayShedule from "./levelShedules/levelShedulesVisualization/DisplayShedule";
import PrintHeader from "./PrintHeader";
import ProgrammationSimpleUserHeader from "./ProgrammationSimpleUserHeader";
import LoaderShedule from "./LoaderShedule";



//Les urls
const Url = require('../../../url')


function  ProgrammationSimpleUser() {

    //Etat de la variable qui recupere tous les emplois de temps de la BD
    const[timeTable, setTimeTable] = useState([])

    //Fonction qui prends tout les emplois de temps afficher par salle dans la base de donnee..
    useEffect(() => {
        axios.get(Url.devUrl() + 'classe-cours',
        ).then((res) => {
            setLoad(false)
            console.log(res.data)
            setTimeTable(res.data)
            setDisplayShedule(true)
        }).catch((err) => {
            throw err
        })
    }, [])



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

    console.log('niveau', niveau)

    //changement de la filiere 
    const[instantFiliere, setInstantFiliere] = useState('')
    const[instantClasse, setInstantClasse] = useState('')

    const handleChangeFiliere = (e) => {
        //mise a jour de la variable selectionner
        setInstantFiliere(e)

        //desactivation de l'affichage de l'emplois de temps
        setDisplayShedule(false)


    }

     //changement de la classe 
    const handleChangeClasse = (e) => {
        //mise a jour de la classe actuelle
        setInstantClasse(e)

        //Desactivation de ;'emplois de temps
        setDisplayShedule(false)
        //activation de loader
        setLoad(true)
    }


    //Fonction qui cherche les donnee juste pour la classe..
    useEffect(() => {
        axios.get(Url.devUrl() + 'classe-cours/' + instantClasse,
        ).then((res) => {
            setLoad(false)
            setDisplayShedule(true)
            console.log(res.data)
            setTimeTable(res.data)
        }).catch((err) => {
            throw err
        })
    }, [instantClasse])


    //Etat de la variable qui signale si on peut deja imprimer
    const[displayHeader, setDisplayHeader] = useState(false)

    //Etat de la variable qui desactive le bouton imprimer
    const [displayPrintB, setDisplayPrintB] = useState(false)

    //Fonction qui imprime l'emplois de temps
    const imprimer = (sectionId) => {
        setDisplayHeader(true)
        setDisplayPrintB(true)

        setTimeout(() => {
            var printContents = document.getElementById(sectionId).innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print()
            document.body.innerHTML = originalContents
            setDisplayHeader(false)
        }, 1000)

        document.window.reload()
    }

    //Affichage du Loader lorsque l'emplois de temps charge
    const[load, setLoad] = useState(true)
   //Affichage de l'emplois de temps
   const[displayShedule, setDisplayShedule] = useState(false)


    return(
        <section>
            <section className = 'programmation-container'>
                <section className = 'select-program-container'>
                    <span className = 'select-program-title'>Selectionner un emploi de temps  </span>
                    <select id = 'filiere' className = 'program-header-select' onChange = {() => handleChangeFiliere(document.getElementById('filiere').value)}>
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
                            niveau.departements.id == instantFiliere ? <option id = {niveau.id} value = {niveau.id}>{niveau.code}</option> : null
                            )
                        }
                            
                    </select> 
                </section>
                <hr />

                <br /> <br />
                <section className = 'shedules-container' id = 'sectionAimprimer'>
                    {/* Affichage de l'entete du document */}
                    {displayHeader ? <PrintHeader /> : null}

                    {load ? <LoaderShedule /> : null}
                    {/* Affichage de l'emplois de temps en fonction des conditions. */}
                    {displayShedule ? <section>
                        {timeTable.map((element) =>
                            <Fragment key = {element.codeClasse}>
                                <section className = 'level-and-confirm'>
                                    <span className = 'salle-name'>{element.codeClasse}</span>
                                </section>
                                <hr />
                                <br />
                                <DisplayShedule timeTableCours = {element.cours}/>
                                <br /><br />
                            </Fragment>
                            )
                        }
                    </section> : null }
                    <br /><br />
                    
                </section>
                <div className = 'print-button' onClick = {() => imprimer('sectionAimprimer')}>{displayPrintB ? <b>loading ...</b> : <b>Imprimer</b>}</div>
                    <br /><br />
            </section>
        </section>
    )
    
}


export default ProgrammationSimpleUser