import React, { useState } from "react";
import '../../../styles/dashboard/programmation/programmation-header.css'

function ProgrammationHeader({setDisplayShedule, setIdNiveau}){


    //Liste de toutes les filiere de la base de donnee
    let filiere = [
        {
            'code' : 1,
            'nom' : 'Informatique'
        },
        {
            'code' : 2,
            'nom' : 'Mathematique'
        },
        {
            'code' : 3,
            'nom' : 'Bioscience'
        }
    ]

    //Liste des niveau ou classe de l'universite en fonction des filiere
    let niveau = [
        {
            'id' : 1,
            'code' : 'INFOL3-SIGL',
            'idFiliere' : 1
        },
        {
            'id' : 2,
            'code' : 'INFOL1',
            'idFiliere' : 1
        },
        {
            'id' : 3,
            'code' : 'MATL1',
            'idFiliere' : 2
        },
        {
            'id' : 4,
            'code' : 'INFOL3-SECU',
            'idFiliere' : 1
        },
        {
            'id' : 5,
            'code' : 'BIOL1',
            'idFiliere' : 3
        },
    ]

    //ETat de la variable qui contient la filiere a un instant T
    const [instantFiliere, setInstantFiliere] = useState(0)
   //pour le niveau ici juste de cette section
   const[idClasse, setIdClasse] = useState(0)

   //Fonction qui handle le bouton selectionner
   const handleSelectionner = () => {
       if(idClasse != 0){
        setDisplayShedule(true)
        setIdNiveau(idClasse)
       }
   }
    return(
        <section className = 'program-header-container'>
            <div className = 'new-program-button' title = 'Nouvel emploi de temps'>+</div>
            <section className = 'select-program-container'>
                <span className = 'select-program-title'>Selectionner un emploi de temps  </span>
                <select id = 'filiere' className = 'program-header-select' onChange = {() => setInstantFiliere(document.getElementById('filiere').value)}>
                    <option>Filiere</option>
                    {
                        filiere.map((filiere) => 
                        <option id = {filiere.code} value = {filiere.code}>{filiere.nom}</option>
                        )
                    }       
                </select>

                <select id = 'niveau' className = 'program-header-select' onChange = {() => setIdClasse(document.getElementById('niveau').value)} >
                    <option>Classe</option>
                    {
                        niveau.map((niveau) => 
                        niveau.idFiliere == instantFiliere ? <option id = {niveau.id} value = {niveau.id}>{niveau.code}</option> : null
                        )
                    }
                         
                </select>


                <div className = 'program-header-select-confirm' onClick = {() => handleSelectionner()}>Selectionner</div>
            </section>
        </section>
    )
}

export default ProgrammationHeader