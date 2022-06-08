import React, { Fragment } from "react";
import { useState } from "react";


import '../../../styles/dashboard/ressource/ressource.css'
import InfoSalle from "./InfoSalle";


function UnitSalle({code, batiment, capCours, type, electricite, idSalle}){

    //Etat de la variable qui precise si la salle a ete clique.
    const [salleClick, setSalleClick] = useState(false)

    //Fonction pour changer l'etat et ferme les info de la salle
    const handleOpenInfo = () => {
        setSalleClick(true)
    }
    return(
        <Fragment>
            <section className = 'unit-salle' onClick = {() => handleOpenInfo()}>
                <span>{code}</span>
            </section>
            {salleClick ? <InfoSalle setSalleClick = {setSalleClick} code = {code} batiment = {batiment} capCours = {capCours} type = {type} electricite = {electricite} idSalle = {idSalle} /> : null}
        </Fragment>
    )
}

export default UnitSalle