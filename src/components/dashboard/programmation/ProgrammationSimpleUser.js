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
        }).catch((err) => {
            throw err
        })
    }, [])


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

    }

    //Affichage du Loader lorsque l'emplois de temps charge
    const[load, setLoad] = useState(true)
   


    return(
        <section>
            <section className = 'programmation-container'>
                <ProgrammationSimpleUserHeader />
                <hr />

                <br /> <br />
                <section className = 'shedules-container' id = 'sectionAimprimer'>
                    {/* Affichage de l'entete du document */}
                    {displayHeader ? <PrintHeader /> : null}

                    {load ? <LoaderShedule /> : null}
                    {/* Affichage de l'emplois de temps en fonction des conditions. */}
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
                    <br /><br />
                    
                </section>
                <div className = 'print-button' onClick = {() => imprimer('sectionAimprimer')}>{displayPrintB ? <b>loading ...</b> : <b>Imprimer</b>}</div>
                    <br /><br />
            </section>
        </section>
    )
    
}


export default ProgrammationSimpleUser