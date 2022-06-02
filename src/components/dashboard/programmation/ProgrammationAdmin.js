import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";

//Componnents
import ProgrammationHeader from "./ProgrammationHeader";
import AdminEditableShedule from "./levelShedules/levelShedulesEdition/AdminEditableShedule";
import SaveAdminModification from "./levelShedules/levelShedulesEdition/SaveAdminModification";


//css
import '../../../styles/dashboard/programmation/programmation.css'
import SalleShedulePrincipal from "./salleShedules/SalleShedulePrincipal";




function  ProgrammationAdmin() {

    //Etat qui permet d'afficher l'emplois de temps ou pas.
    const [displayShedule, setDisplayShedule] = useState(false)

     //Pour le niveau
     const [idNiveau, setIdNiveau] = useState(0)


    //Requete pour chercher en base de donnee le table des valeurs des case de cet emplois de temps.
    useEffect(() => {
        axios.get(

        ).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])


    //Etat de la variable qui affiche l'emplois de temps par salle
    const[displaySalle, setDisplaySalle] = useState(false)

    //Fonction qui handle l'affichage de l'emplois de temps par salle
    const handleDisplay = () =>{
        displaySalle ? setDisplaySalle(false) : setDisplaySalle(true)
    }
    return(
        <section>
            <section className = 'programmation-container'>
                <ProgrammationHeader setDisplayShedule = {setDisplayShedule} setIdNiveau = {setIdNiveau}/>
                <hr />

                <br /> <br />
                {displayShedule ? <section className = 'shedules-container'>
                    {/* Affichage de l'emplois de temps en fonction des conditions. */}
                    <section className = 'level-and-confirm'>
                        <h4>{idNiveau}</h4>
                        <SaveAdminModification />
                    </section>
                    <hr />
                    <br />
                    <AdminEditableShedule idNiveau = {idNiveau}/>   
                    <br /><br /><br />
                    {/* L'affichage des emplois de temps par salle */}
                    <section>
                        <section className = 'print-big-container'>
                            <div className = 'display-by-salle-button' onClick = {() => handleDisplay()}>Activer l'affichage par salle</div>
                        </section>
                        <br />
                        {/* Affichage de l'emplois de temps par salle */}
                        {displaySalle ? <SalleShedulePrincipal /> : null}
                    </section> 
                </section> : null}
                
            </section>
        </section>
    )
    
}


export default ProgrammationAdmin