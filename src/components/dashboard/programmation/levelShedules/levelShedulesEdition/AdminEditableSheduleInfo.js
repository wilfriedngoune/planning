import React, { Fragment, useState } from "react";


// css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import AdminEditableSheduleInfoPopup from "./AdminEditableSheduleInfoPopup";


function AdminEditableSheduleInfo({id, caseValue, setTmpCaseValue, idNiveau}){
    //etat de la variable qui controle le popup d'edition d'une case de l''emplois de temps
    const [displayAdminEdit, setDisplayAdminEdit] = useState (false)
    //Methode qui change l'etat
    const HandleOpenAdminEdit = () => {
        setDisplayAdminEdit(true)
    }

    //Verifier si cette plage est occupee ou pas
    const isOccupied = () => {
        let index = -1
        
        for (let i = 0; i < caseValue.length; i++) {
            if (caseValue[i].plage === id) {
                index = i;
            }
        }
        return index;
    }

    return(
        <Fragment>
            <section onClick = {() => HandleOpenAdminEdit()} className = 'edit-info-container' title = 'Cliquer pour editer'>
            {isOccupied() === -1 ? <span>&nbsp;</span> : <Fragment>
                <span>{caseValue[isOccupied()].ue}</span> <br />
                <span>{caseValue[isOccupied()].salle}</span> <br />
                <span>Dr {caseValue[isOccupied()].enseignant}</span>
            </Fragment>}
            </section>
            {/* Affiche de la popup de modification d'une case */}
            { displayAdminEdit ? <AdminEditableSheduleInfoPopup setDisplayAdminEdit = {setDisplayAdminEdit} id = {id} setTmpCaseValue = {setTmpCaseValue} caseValue = {caseValue} idNiveau = {idNiveau}/> : null}
        </Fragment>
    )

}

export default AdminEditableSheduleInfo