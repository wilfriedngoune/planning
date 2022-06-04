import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

//Les composants
import SalleShedule from "./SalleShedule";


//Les Urls
const Url = require('../../../../url')

function SalleShedulePrincipal({setLoaderForSalle}){

    //focntion pour recuperer toutes les salle de la base de donne avec les cours qui passe.
    const[timeTableSalle, setTimeTableSalle] = useState([])

    useEffect(() => {
        axios.get(Url.devUrl() + 'salle-cours',
        ).then((res) => {
            //Desactivation du loader quand la donne arrive
            setLoaderForSalle(false)
            console.log(res.data)
            setTimeTableSalle(res.data)
        }).catch((err) =>{
            throw err
        })
    }, [])

    //Liste de tous les emplois de tenps de la faculte des sciences
    let timeTableCours = [
        {
            'codeSalle' : 'A250',
            'cours' : [
                {
                    'plage' : 2,
                    'ue' : "INF3015",
                    'enseignant' : 'Tsopze Norbert',
                },
        
                {
                    'plage' : 4,
                    'ue' : "INF3055",
                    'enseignant' : 'Valery Monthe',
                },
        
                {
                    'plage' : 5,
                    'ue' : "INF3196",
                    'enseignant' : 'Jiomekong Fidele',
                },
        
                {
                    'plage' : 21,
                    'ue' : "INF3025",
                    'enseignant' : 'Thomas Messi',
                },
        
            ]
        },

        {
            'codeSalle' : 'S006',
            'cours' : [
                {
                    'plage' : 17,
                    'ue' : "INF2033",
                    'enseignant' : 'Tsopze Norbert',
                },
        
                {
                    'plage' : 4,
                    'ue' : "INF3055",
                    'enseignant' : 'Valery Monthe',
                },
        
                {
                    'plage' : 5,
                    'ue' : "INF3196",
                    'enseignant' : 'Jiomekong Fidele',
                },
        
                {
                    'plage' : 21,
                    'ue' : "INF3025",
                    'enseignant' : 'Thomas Messi',
                },
        
            ]
        },

        {
            'codeSalle' : 'S008',
            'cours' : [
                {
                    'plage' : 2,
                    'ue' : "INF3015",
                    'enseignant' : 'Tsopze Norbert',
                },
        
                {
                    'plage' : 4,
                    'ue' : "INF3055",
                    'enseignant' : 'Valery Monthe',
                },
        
                {
                    'plage' : 5,
                    'ue' : "INF3196",
                    'enseignant' : 'Jiomekong Fidele',
                },
        
                {
                    'plage' : 21,
                    'ue' : "INF3025",
                    'enseignant' : 'Thomas Messi',
                },
        
            ]
        },

    ]
    return(
        <section>
            {timeTableSalle.map((element) => 
            <Fragment>
                <div>{element.codeSalle}</div>
                <hr /><br />
                <SalleShedule timeTableCours = {element.cours} />
                <br /><br />
            </Fragment>
            )}
        </section>
    )
}


export default SalleShedulePrincipal