import React, {Fragment} from "react";


// css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'



function DisplaySheduleInfo({id, caseValue}){

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
        <section className = 'edit-info-container'>
            
            {isOccupied() === -1 ? <span>&nbsp;</span> : <Fragment>
                <span>{caseValue[isOccupied()].ue}</span> <br />
                <span>{caseValue[isOccupied()].salle}</span> <br />
                <span>Dr {caseValue[isOccupied()].enseignant}</span>
            </Fragment>}

        </section>
    )

}

export default DisplaySheduleInfo