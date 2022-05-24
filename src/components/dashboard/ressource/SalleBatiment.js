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
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'R107',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'S001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 110,
                    'capacite_exam' : 80,
                },
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'R107',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'S001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 110,
                    'capacite_exam' : 80,
                },
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'R107',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'S001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 110,
                    'capacite_exam' : 80,
                },{
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'R107',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'S001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 110,
                    'capacite_exam' : 80,
                }
            ]
        },

        {
            'nom' : 'Departement informatique',
            'salles' : [
                {
                    'nom' : 'S006',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 120,
                    'capacite_exam' : 90,
                },
    
                {
                    'nom' : 'S008',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 100,
                    'capacite_exam' : 80,
                },
    
                {
                    'nom' : 'S007',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 110,
                    'capacite_exam' : 80,
                },
            ]
        }
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
                        <div className = 'btp-title'>{batiment.nom}</div>
                        <section className = 'display-salle'>
                            {
                                batiment.salles.map(
                                    (salle) =>
                                    <Fragment><UnitSalle nom = {salle.nom} batiment = {batiment.nom} capCours  = {salle.capacite_cours} capExam = {salle.capacite_exam} electricite = {salle.etat_electricite} /></Fragment>
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