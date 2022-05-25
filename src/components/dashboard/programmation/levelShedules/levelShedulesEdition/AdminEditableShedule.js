import React, { useState } from "react";

//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import AdminEditableSheduleInfo from "./AdminEditableSheduleInfo";



function AdminEditableShedule(){

    //Tableau des valeurs passe en param
    let originalCaseValue = [
        {
            'plage' : 2,
            'ue' : "INF3015",
            'enseignant' : 'Tsopze Norbert',
            'salle' : 'A3'
        },

        {
            'plage' : 4,
            'ue' : "INF3055",
            'enseignant' : 'Valery Monthe',
            'salle' : 'SOO6'
        },

        {
            'plage' : 5,
            'ue' : "INF3196",
            'enseignant' : 'Jiomekong Fidele',
            'salle' : 'S008'
        },

        {
            'plage' : 21,
            'ue' : "INF3025",
            'enseignant' : 'Thomas Messi',
            'salle' : 'A250'
        },
    ]

    //Etat de la variable de modification instantanee de l'emplois de temps
    const [caseValue, setTmpCaseValue] = useState(originalCaseValue)
    console.log(caseValue[0])
    return(
        <section>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Samedi</th>
                        <th>Dimanche</th>
                    </tr>
                </thead>

                {/* Deuxieme ligne */}
                <tbody>
                    <tr>
                        <th>7h - 9h55</th>
                        <td><AdminEditableSheduleInfo id = {1} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {2} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {3} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {4} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {5} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {6} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {7} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                    </tr>

                    {/* troisieme ligne */}

                    <tr>
                        <th>10h05 - 12h55</th>
                        <td><AdminEditableSheduleInfo id = {8} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {9} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {10} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {11} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {12} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {13} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {14} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                    </tr>

                    {/* 4e ligne */}

                    <tr>
                        <th>13h05 - 15h55</th>
                        <td><AdminEditableSheduleInfo id = {15} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {16} caseValue = {caseValue}setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {17} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {18} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {19} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {20} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {21} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                    </tr>

                    {/* 5e ligne */}

                    <tr>
                        <th>16h05 - 18h55</th>
                        <td><AdminEditableSheduleInfo id = {22} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {23} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {24} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {25} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {26} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {27} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {28} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                    </tr>

                    {/* 6e ligne */}

                    <tr>
                        <th>19h05 - 21h55</th>
                        <td><AdminEditableSheduleInfo id = {29} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {30} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {31} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {32} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {33} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {34} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                        <td><AdminEditableSheduleInfo id = {35} caseValue = {caseValue} setTmpCaseValue = {setTmpCaseValue}/></td>
                    </tr>
                </tbody>

            </table>

        </section>
    )
}


export default AdminEditableShedule