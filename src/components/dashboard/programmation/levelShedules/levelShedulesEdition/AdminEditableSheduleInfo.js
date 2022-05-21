import React, { Fragment, useState } from "react";


// css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import AdminEditableSheduleInfoPopup from "./AdminEditableSheduleInfoPopup";


function AdminEditableSheduleInfo(){
    //etat de la variable qui controle le popup d'edition d'une case de l''emplois de temps
    const [displayAdminEdit, setDisplayAdminEdit] = useState (false)
    //Methode qui change l'etat
    const HandleOpenAdminEdit = () => {
        setDisplayAdminEdit(true)
    }

    return(
        <Fragment>
            <section onClick = {() => HandleOpenAdminEdit()} className = 'edit-info-container' title = 'Cliquer pour editer'>
            INF3015 <br />
            A3
            </section>
            { displayAdminEdit ? <AdminEditableSheduleInfoPopup setDisplayAdminEdit = {setDisplayAdminEdit} /> : null}
        </Fragment>
    )

}

export default AdminEditableSheduleInfo