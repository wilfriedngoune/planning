import React, { Fragment, useState } from "react";

//css
import '../../../../styles/dashboard/ressource/add-new-ressource.css'
import InfoRessource from "./InfoRessource";





function UnitRessource({id, nom, description}){

    //Etat de la variable qui permet d'afficher info ressource
    const [displayInfo, setDisplayInfo] = useState(false)



    return(
        <Fragment>
            <section className = 'unit-ressource-container' onClick = {() => setDisplayInfo(true)}>
                {nom}
            </section>
            {displayInfo ? <InfoRessource id = {id} nom = {nom} description = {description} setDisplayInfo = {setDisplayInfo}/> : null}
        </Fragment>

    )
}


export default UnitRessource