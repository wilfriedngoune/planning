import React, { Fragment, useEffect, useState } from "react";
import UnitSalle from "./UnitSalle";
import axios from "axios";


//css
import '../../../styles/dashboard/ressource/salle-batiment.css'
import '../../../styles/dashboard/ressource/salle-batiment.css'


//Les Urls
const Url = require('../../../url')

function SalleType(){

    //Conteneur de l'ensemble qui contiendra la liste des batiments et salles.
    //Les salles
    let salleType = [
        {
            'nom' : 'Salle simple',
            'salles' : [
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'batiment' : 'Bloc pedagogique',
                },
    
                {
                    'nom' : 'SOO6',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'batiment' : 'Departement Informatique',
                },
                {
                    'nom' : 'S008',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'batiment' : 'Departement Informatique',
                },
            ]
        },

        {
            'nom' : 'Amphitheatre',
            'salles' : [
                {
                    'nom' : 'A350',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 350,
                    'batiment' : 'Face decanat',
                },
    
                {
                    'nom' : 'A3',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 300,
                    'batiment' : 'Face scolarite',
                },
                {
                    'nom' : 'A1001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 1000,
                    'batiment' : 'Marche 1001',
                },
            ]
        }
    ]
    
    
    
    //Etat de la variable qui contient le tableau de json a manipuler
    const [salle, setSalle] = useState([{}])
    const [x, setX] = useState('')

    
    

     //Recuperation de la liste des salles en fonction des type 
     useEffect(() => { 
         //Fonction qui permet de recuperer les batiment par salle dans la base de 
        const getBatimentSalle = () => {
        axios.get(Url.devUrl() + 'batiment-salle/',

            ).then((res) => {
                console.log('la variable que je prends', res.data)
                setSalle(res.data)
                console.log('La variable a jour', salle)
                setX('bonjour')
                console.log(x)
            }).catch((err) => {
                throw err
            })
        }
        getBatimentSalle()
    }, [])



   
    return(
        <section>
            <section> 
            {
                salleType.map
                (
                        (type) => 
                    <section> 
                        <div className = 'btp-title'>{type.nom}</div>
                        <section className = 'display-salle'>
                            {
                                type.salles.map(
                                    (salle) =>
                                    <Fragment><UnitSalle nom = {salle.nom} batiment = {salle.batiment} capCours  = {salle.capacite_cours} electricite = {salle.etat_electricite} type = {type.nom} /></Fragment>
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