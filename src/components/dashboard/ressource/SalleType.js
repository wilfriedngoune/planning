import React, { Fragment, useEffect, useState } from "react";
import UnitSalle from "./UnitSalle";
import axios from "axios";


//css
import '../../../styles/dashboard/ressource/salle-batiment.css'
import '../../../styles/dashboard/ressource/salle-batiment.css'


//Les Urls
const Url = require('../../../url')

function SalleType({typeSalle}){




    console.log(typeSalle)
   
    return(
        <section>
            <section> 
            {
                typeSalle.map
                (
                        (type) => 
                    <section> 
                        <div className = 'btp-title'>{type.nom}</div>
                        <section className = 'display-salle'>
                            {
                                type.salle.map(
                                    (salle) =>
                                    <Fragment><UnitSalle code = {salle.code}  capCours  = {salle.capacite} electricite = {salle.etat_electricite} type = {type.nom} idSalle = {salle.id}/></Fragment>
                                )
                            }
                        </section>
                        <br />
                    </section>
                )
            }
            </section>
        </section>
    )
}


export default SalleType