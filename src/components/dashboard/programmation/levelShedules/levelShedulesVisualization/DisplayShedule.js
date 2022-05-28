import React from "react";

//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import DisplaySheduleInfo from "./DisplaySheduleInfo";



function DisplayShedule({timeTableCours}){
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
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {1}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {2}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {3}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {4}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {5}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {6}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {7}/></td>
                    </tr>

                    {/* troisieme ligne */}

                    <tr>
                        <th>10h05 - 12h55</th>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {8}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {9}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {10}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {11}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {12}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {13}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {14}/></td>
                    </tr>

                    {/* 4e ligne */}

                    <tr>
                        <th>13h05 - 15h55</th>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {15}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {16}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {17}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {18}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {19}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {20}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {21}/></td>
                    </tr>

                    {/* 5e ligne */}

                    <tr>
                        <th>16h05 - 18h55</th>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {22}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {23}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {24}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {25}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {26}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {27}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {28}/></td>
                    </tr>

                    {/* 6e ligne */}

                    <tr>
                        <th>19h05 - 21h55</th>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {29}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {30}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {31}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {32}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {33}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {34}/></td>
                        <td><DisplaySheduleInfo caseValue = {timeTableCours} id = {35}/></td>
                    </tr>
                </tbody>

            </table>

        </section>
    )
}


export default DisplayShedule