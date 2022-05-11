import React, { Fragment } from "react";
import '../../../styles/dashboard/ressource/salle-batiment.css'
import UnitSalle from "./UnitSalle";
import '../../../styles/dashboard/ressource/salle-batiment.css'


function SalleTaille(){

    //Conteneur de l'ensemble qui contiendra la liste des batiments et salles.
    //Les salles
    let salle = [
        {
            'nom' : 'R110',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 100,
            'capacite_exam' : 80,
            'batiment' : 'Bloc pedagogique'
        },
        {
            'nom' : 'S006',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 100,
            'capacite_exam' : 80,
            'batiment' : 'Departement informatique'
        },

        {
            'nom' : 'S016',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 200,
            'capacite_exam' : 80,
            'batiment' : 'Departement mathematique'
        },

    ]

    //Les Amphis
    let amphi = [
        {
            'nom' : 'A250',
            'etat_electricite' : 'Non',
            'capacite_cours' : 350,
            'capacite_exam' : 250,
            'batiment' : 'Face decanat'
        },
        {
            'nom' : 'A3',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 300,
            'capacite_exam' : 250,
            'batiment' : 'Scolarite'
        },
        {
            'nom' : 'A350',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 500,
            'capacite_exam' : 80,
            'batiment' : 'Face decanat'
        },

        {
            'nom' : 'A1001',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 1500,
            'capacite_exam' : 1000,
            'batiment' : 'Marché 1001'
        },

        {
            'nom' : 'A1002',
            'etat_electricite' : 'Oui',
            'capacite_cours' : 1500,
            'capacite_exam' : 1000,
            'batiment' : 'Marché 1001'
        },

    ]
    
    



   
    return(
        <section>
            <section> 
                <div className = 'btp-title'>Salles</div>
                <section className = 'display-salle'>
                    {
                        salle.map(
                            (salle) =>
                            <Fragment><UnitSalle nom = {salle.nom} batiment = {salle.batiment} capCours  = {salle.capacite_cours} capExam = {salle.capacite_exam} electricite = {salle.etat_electricite} /></Fragment>
                        )
                    }
                </section>
                <br />

                <div className = 'btp-title'>Amphitheatres</div>
                <section className = 'display-salle'>
                    {
                        amphi.map(
                            (salle) =>
                            <Fragment><UnitSalle nom = {salle.nom} batiment = {salle.batiment} capCours  = {salle.capacite_cours} capExam = {salle.capacite_exam} electricite = {salle.etat_electricite} /></Fragment>
                        )
                    }
                </section>
            </section>
        </section>
    )
}


export default SalleTaille