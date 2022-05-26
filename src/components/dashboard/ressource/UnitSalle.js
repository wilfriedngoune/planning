import React, { Fragment } from "react";
import { useState } from "react";


import '../../../styles/dashboard/ressource/ressource.css'
import InfoSalle from "./InfoSalle";


function UnitSalle({nom, batiment, capCours, type, electricite}){

    //Etat de la variable qui precise si la salle a ete clique.
    const [salleClick, setSalleClick] = useState(false)

    //Fonction pour changer l'etat et ferme les info de la salle
    const handleOpenInfo = () => {
        setSalleClick(true)
    }
    return(
        <Fragment>
            <section className = 'unit-salle' onClick = {() => handleOpenInfo()}>
                <span>{nom}</span>
            </section>
            {salleClick ? <InfoSalle setSalleClick = {setSalleClick} nom = {nom} batiment = {batiment} capCours = {capCours} type = {type} electricite = {electricite}  /> : null}
        </Fragment>
    )
}

export default UnitSalle