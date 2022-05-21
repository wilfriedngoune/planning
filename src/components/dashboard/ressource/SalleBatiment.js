import React, { Fragment } from "react";
import '../../../styles/dashboard/ressource/salle-batiment.css'
import UnitSalle from "./UnitSalle";
import '../../../styles/dashboard/ressource/salle-batiment.css'


function SalleBatiment(){

    //Recuperation des salles classe par batiment.

    fetch("http://192.168.8.100:8000/api/salle-batiment")
    .then(function(res) {
        console.log(res)
    })
    .catch(function() {

    });

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