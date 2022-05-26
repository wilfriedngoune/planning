import React, {useEffect, useState} from "react";
import ProgrammationHeader from "./ProgrammationHeader";
import '../../../styles/dashboard/programmation/programmation.css'
import AdminEditableShedule from "./levelShedules/levelShedulesEdition/AdminEditableShedule";
import SaveAdminModification from "./levelShedules/levelShedulesEdition/SaveAdminModification";
import axios from "axios";



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
                    <AdminEditableShedule />    
                </section> : null}
            </section>
        </section>
    )
    
}


export default ProgrammationAdmin