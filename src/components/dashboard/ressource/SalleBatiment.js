import React, { Fragment, useEffect, useState } from "react";
import '../../../styles/dashboard/ressource/salle-batiment.css'
import UnitSalle from "./UnitSalle";
import '../../../styles/dashboard/ressource/salle-batiment.css'


//Les Urls
const Url = require('../../../url')




function SalleBatiment({salleBatiment}){




    return(
        <section>
            {
                salleBatiment.map
                (
                        (batiment) => 
                    <section> 
                        <div id = {batiment.nom} className = 'btp-title'>{batiment.nom}</div>
                        <section className = 'display-salle'>
                            {
                                batiment.salles.map(
                                    (salle) =>
                                    <Fragment><UnitSalle code = {salle.code} batiment = {batiment.nom} capCours  = {salle.capacite} type = {salle.type_salles.nom} electricite = {salle.etat_electricite} idSalle = {salle.id} /></Fragment>
                                )
                            }
                        </section>
                        <br />
                    </section>
                )
            }
        </section>
    )
}


export default SalleBatiment