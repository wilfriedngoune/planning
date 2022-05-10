import React from "react";
import '../../../styles/dashboard/ressource/lat-bar.css'

function LatBar(){
    return(
        <section className = 'lat-bar-container'>
            {/*Listing des element de la latbar */}

            {/*Les salles*/}
            <section className = 'lat-bar-item'>
                <section>
                    <i></i>
                    <span>Salle</span>
                </section>
                <span class="material-symbols-outlined">chevron_right</span>
            </section>

            
            <section className = 'lat-bar-item'>
                <section>
                    <i></i>
                    <span>Video projecteur</span>
                </section>
                <span class="material-symbols-outlined">chevron_right</span>
            </section>

            <section className = 'lat-bar-item'>
                <section>
                    <i></i>
                    <span>Espace vert</span>
                </section>
                <span class="material-symbols-outlined">chevron_right</span>
            </section>

            <section className = 'lat-bar-item'>
                <section>
                    <i></i>
                    <span>Video projecteur</span>
                </section>
                <span class="material-symbols-outlined">chevron_right</span>
            </section>

            {/*Bouton pour ajouter une nouvelle ressource. */}
            <br /><br />
            <div className = 'add-new-ressource'>Ajouter une nouvelle ressource</div>
        </section>
    )
}


export default LatBar