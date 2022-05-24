import React, { useState } from "react";


import '../../../styles/dashboard/dashboardHeader.css'
import '../../../styles/dashboard/ressource/ressource.css'


import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import LatBar from "./LatBar";
import ManageBtpType from "./ManageBtpType";
import NewSalle from "./NewSalle";
import RessourceLinks from "./RessourceLinks";
import SalleBatiment from "./SalleBatiment";
import SalleType from "./SalleType";


function Ressource(){

    //Etat qui controle le type d'affichage des salles
    const [displayType, setDisplayType] = useState('Batiment')

    //Fonction qui permet de changer le type d'affichage



    //Etat qui controle l'affichage du formulaire de creation nouvelle salle.
    const [newSalle, setNewSalle] = useState(false);


    //Etat qui affiche le popup de gestion des barimwnt et des salles
    const [manageBtp, setManageBtp] = useState(false);



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
                        <span className = 'title'>Les salles</span>
                        <section className = 'new-salle-and-search'>
                            <div className = 'button-btp' onClick = {() => setNewSalle(true)}>Nouvelle salle</div>

                            {/* Affichage du formulaire de creation de la nouvelle salle */}
                            {newSalle ? <NewSalle setNewSalle = {setNewSalle}/> : null}
                            <input type = 'search' placeholder = 'Rechercher une salle' className = 'new-salle search-field' />
                        </section>
                    </section>

                    {/*Type d'affichage des salles*/}
                    <br />
                    <section className = 'display-type'>
                        <section className = 'display-type'>
                            <h4>Afficher par</h4> 
                            <select id = 'display-type' onChange = {() => setDisplayType(document.getElementById('display-type').value)} className = 'display-type-select'>
                                <option>Batiment</option>
                                <option>Type</option>
                            </select>
                        </section>
                        <div className = 'button-btp' onClick = {() => setManageBtp(true)}>Gerer les batiments et les types</div>
                        {manageBtp ? <ManageBtpType setManageBtp = {setManageBtp} /> : null}
                    </section>
                    <hr />

                    {/*Affichage du loader */}
                    {/* <SalleLoading /> */}
                    {/*Affichage des salle en fonction de la selection */}
                    <br />
                    {displayType === "Batiment" ? <SalleBatiment /> : <SalleType />}
                    

                </section>
            </section>
        </section>
    )
}

export default Ressource