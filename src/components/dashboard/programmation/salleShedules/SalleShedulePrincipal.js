import React, { Fragment } from "react";
import SalleShedule from "./SalleShedule";


function SalleShedulePrincipal(){

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
            {timeTableCours.map((element) => 
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