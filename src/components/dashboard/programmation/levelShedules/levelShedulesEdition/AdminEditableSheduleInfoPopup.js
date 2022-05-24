import React from "react";

//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'

function AdminEditableSheduleInfoPopup({setDisplayAdminEdit}){

    //fonction qui ferme la popup d'edition en cas d'annulation
    const HandleCloseAdminEdit = () => {
        setDisplayAdminEdit(false)
    }
    return(
        <section className = 'edit-popup-container'>
            <br /><br /><br /><br /><br /><br /><br />
            <section className = 'edit-popup-box'>
                <div className = 'edit-popup-title'>Editer la case</div>
                <section className = 'edit-element-container'>
                    {/* Pour l'ue */}
                    <select className = 'edit-element-item'>
                        <option>UE...</option>
                        <option>INF3015</option>
                        <option>INF3025</option>
                        <option>INF3036</option>
                    </select>


                    {/* Pour l'enseignant */}
                    <select className = 'edit-element-item'>
                        <option>Enseignant...</option>
                        <option>Valery Monthe</option>
                        <option>Jiomekong Fidele</option>
                    </select>

                    {/* Pour la salle */}
                    <select className = 'edit-element-item'>
                        <option>Salle...</option>
                        <option>A250</option>
                        <option>A3</option>
                    </select>
                    
                </section>

                <br /><br />
                <section className = 'edit-popup-footer'>
                    <div className = 'edit-popup-button'>Valider</div>
                    <div className = 'edit-popup-button red-back' onClick = {() => HandleCloseAdminEdit()}>Annuler</div>
                </section>
            </section>
        </section>
    )
}

export default AdminEditableSheduleInfoPopup