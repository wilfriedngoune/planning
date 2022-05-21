import React from "react";
import '../../../styles/dashboard/ressource/lat-bar.css'

import {Link} from 'react-router-dom';

function LatBar({nom}){


    return(
        <section className = 'lat-bar-container'>
            {/*Listing des element de la latbar */}

            {/*Les salles*/}
            <Link to = '/dashboard/ressource/salle' className = 'lat-bar-router-link'>
                <section className = 'lat-bar-item'>
                    <section>
                        <i></i>
                        <span className = 'lat-bar-name'>Salle</span>
                    </section>
                    <span class="material-symbols-outlined">chevron_right</span>
                </section>
            </Link>


            <Link to = '/dashboard/ressource/video-projecteur' className = 'lat-bar-router-link'>
                <section className = 'lat-bar-item'>
                    <section>
                        <i></i>
                        <span className = 'lat-bar-name'>Autre ressources</span>
                    </section>
                    <span class="material-symbols-outlined">chevron_right</span>
                </section>
            </Link>

           
            {/*Bouton pour ajouter une nouvelle ressource. */}
            <br /><br />
            <div className = 'add-new-ressource'>Ajouter une nouvelle ressource</div>
        </section>
    )
}


export default LatBar