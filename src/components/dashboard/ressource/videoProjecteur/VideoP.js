import React, { useState } from "react";
import '../../../../styles/dashboard/dashboardHeader.css'
import ProfilPicture from "../../dashboardHeader/ProfilPicture";
import Logo from "../../dashboardHeader/Logo";
import LatBar from "../LatBar";
import RessourceLinks from "../RessourceLinks";
import NewType from "./NewType";
import NewRessource from "./NewRessource";



function VideoP(){

    //Etat pour controler l'affichage du formulaire d'un nouveau type
    const [newType, setNewType] = useState(false)


    //Etat pour controler l'affichage du formulaire d'une nouvelle ressource
    const [newRessource, setNewRessource] = useState(false)


    let type = [
        {
            'code' : "1", 
            'nom' : "Video projecteur"
        },
        {
            'code' : "2", 
            'nom' : "Vehicule"
        },
        {
            'code' : "3", 
            'nom' : "Espace veert"
        }
    ]
    return(
        <section>
            {/*Le Header */}
            <section className = 'dashboard-header-container'>
                <Logo />
                <section className = 'links-and-picture'>
                    <RessourceLinks />
                    <ProfilPicture />
                </section>
            </section>

            {/*La partie gauche et droite de la page */}
            <section className = 'ressource-container'>
                {/*Le nom c'est pour ajouter le signe de la page active */}
                <LatBar nom = 'salle' />


                <section className = 'right-side'>

                    <section className = 'right-side-header'>
                        <span className = 'title'>Les autres ressources</span>
                        <input type = 'search' placeholder = 'Rechercher une ressource' className = 'new-salle search-field for-ressource' />
                    </section>
                    <br /><br />

                    {/* Selection du tpe de la ressource et bouton de creation */}
                    <section className = 'big-display-type'>
                        <section className = 'display-type'>
                            <h4>Type de la ressource</h4> 
                            <select id = 'display-type'  className = 'display-type-select'>
                                {/* Lister la liste de tous les type de la ressource */}
                                {
                                    type.map((type) => 
                                    <option id = {type.code}>{type.nom}</option>
                                    )
                                }
                            </select>
                        </section>
                        <section className = 'display-type'>
                            <div className = 'new-elt-button' onClick = {() => setNewType(true)}>Nouveau type</div>

                            {/* Formulaire de nouveau type */}
                            {newType ? <NewType setNewType = {setNewType} /> : null}

                            <div className = 'new-elt-button' onClick = {() => setNewRessource(true)}>Nouvelle ressource</div>

                            {/* Formulaire de nouvelle ressource */}
                            {newRessource ? <NewRessource setNewRessource = {setNewRessource} /> : null}
                        </section>
                    </section>
                    <hr />

                    {/*Type d'affichage des salles*/}
                    
                    

                </section>
            </section>
        </section>
    )
}

export default VideoP