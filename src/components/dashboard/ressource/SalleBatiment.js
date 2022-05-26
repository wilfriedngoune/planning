import React, { Fragment, useEffect, useState } from "react";
import '../../../styles/dashboard/ressource/salle-batiment.css'
import UnitSalle from "./UnitSalle";
import '../../../styles/dashboard/ressource/salle-batiment.css'
import axios from "axios";


//Les Urls
const Url = require('../../../url')


function SalleBatiment(){

    //Etat de la variable qui recupere toutes les salles par batiment
    const[sallebatiment, setSalleBatiment] = useState([{}])



    //Conteneur de l'ensemble qui contiendra la liste des batiments et salles.
    
    let salleBatiment = [
        {
            'nom' : 'Bloc pedagogique',
            'salles' : [
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'R107',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'S001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 110,
                    'type' : 'Salle simple',
                },
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
            ]
        },

        {
            'nom' : 'Departement informatique',
            'salles' : [
                {
                    'nom' : 'S006',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 120,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'S008',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'S007',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 110,
                    'type' : 'Salle simple',
                },
            ]
        },
        {
            'nom' : 'Marche 1001',
            'salles' : [
                {
                    'nom' : 'A1001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 1000,
                    'type' : 'Amphitheatre',
                },
    
                {
                    'nom' : 'A1002',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 1000,
                    'type' : 'Amphitheatre',
                },
            ]
        },
        {
            'nom' : 'Face scolarite',
            'salles' : [
                {
                    'nom' : 'A3',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 300,
                    'type' : 'Amphitheatre',
                },
            ]
        },

    ]

    //Recuperation de la liste des salles en fonction des batiment
    
    useEffect(() => {
        axios.get( Url.devUrl() + 'batiment-salle/',

        ).then((res) => {
            console.log(res.data)
            setSalleBatiment(res.data)
            console.log(sallebatiment)
        }).catch((err) => {
            throw err
        })
    }, [])

   

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
                                    <Fragment id = {salle.nom}><UnitSalle nom = {salle.nom} batiment = {batiment.nom} capCours  = {salle.capacite_cours} type = {salle.type} electricite = {salle.etat_electricite} /></Fragment>
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