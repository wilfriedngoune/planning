import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";

//Componnents
import ProgrammationHeader from "./ProgrammationHeader";
import AdminEditableShedule from "./levelShedules/levelShedulesEdition/AdminEditableShedule";
import SaveAdminModification from "./levelShedules/levelShedulesEdition/SaveAdminModification";
import SalleShedulePrincipal from "./salleShedules/SalleShedulePrincipal";

//css
import '../../../styles/dashboard/programmation/programmation.css'
import LoaderShedule from "./LoaderShedule";

//Les urls
const Url = require('../../../url')



function  ProgrammationAdmin() {

    //Etat qui permet d'afficher l'emplois de temps ou pas.
    const [displayShedule, setDisplayShedule] = useState(false)

     //Pour le niveau
     const [idNiveau, setIdNiveau] = useState(0)


    //Requete pour chercher en base de donnee le json qui contient la valeur de la classe selectionner
    const[classeTable, setClasseTable] = useState()




    //Etat de la variable qui affiche l'emplois de temps par salle
    const[displaySalle, setDisplaySalle] = useState(false)
    const[loaderForSalle, setLoaderForSalle] = useState(false)

    //Fonction qui handle l'affichage de l'emplois de temps par salle
    const handleDisplay = () =>{
        
        if(displaySalle){
            setDisplaySalle(false)
        } 
        else{
            setLoaderForSalle(true)
            setDisplaySalle(true)
        } 
    }

   //Affichage du loader pour le planning de l'admin
   const[displayLoader, setDisplayLoader] = useState(false)


   //Variable pour savoir si quelque chose a ete modifier dans l'emplois de temps
   const[modifyCase, setModifyCase] = useState(false)
   
   //variable qui affiche la pop en cas d'oublie de validation de modification
   const[displayForgetPop, setDisplayForgetPop] = useState()


    //Etat de la variable qui contient les emplois de temps avec, qui est initialiser a l'emplois de depart.
    const [finalCaseValue, setFinalCaseValue] = useState()
   

    return(
        <section>
            <section className = 'programmation-container'>
                <ProgrammationHeader setDisplayShedule = {setDisplayShedule} setIdNiveau = {setIdNiveau} setDisplayLoader = {setDisplayLoader} setClasseTable = {setClasseTable} modifyCase = {modifyCase} setDisplayForgetPop = {setDisplayForgetPop}/>
                <hr />

                <br /> <br />
                {/* Loader */}
                <section className = 'shedules-container'>
                    {displayLoader ? <LoaderShedule /> : null}
                </section>
                {displayShedule ? <section className = 'shedules-container'>

                    {/* Affichage de l'emplois de temps en fonction des conditions. */}
                    <section className = 'level-and-confirm'>
                        <h4>{classeTable.codeClasse}</h4>
                        <SaveAdminModification displayForgetPop = {displayForgetPop} finalCaseValue = {finalCaseValue} modifyCase = {modifyCase} idNiveau = {idNiveau}/>
                    </section>
                    <hr />
                    <br />
                    

                    <AdminEditableShedule idNiveau = {idNiveau} caseValue = {classeTable.cours} setModifyCase = {setModifyCase} setFinalCaseValue = {setFinalCaseValue}/>   
                    <br /><br /><br />
                    {/* L'affichage des emplois de temps par salle */}
                    <section>
                        <section className = 'print-big-container'>
                            <div className = 'display-by-salle-button' onClick = {() => handleDisplay()}>Activer l'affichage par salle</div>
                        </section>
                        <br />
                        {/* Affichage de l'emplois de temps par salle */}
                        {loaderForSalle ? <LoaderShedule /> : null}
                        {displaySalle ? <SalleShedulePrincipal setLoaderForSalle = {setLoaderForSalle}/> : null}
                    </section> 
                </section> : null}
                
            </section>
        </section>
    )
    
}


export default ProgrammationAdmin