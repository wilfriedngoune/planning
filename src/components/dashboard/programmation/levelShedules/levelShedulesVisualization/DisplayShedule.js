import React from "react";

//css
import '../../../../../styles/dashboard/programmation/levelShedules/level-shedules-editable.css'
import DisplaySheduleInfo from "./DisplaySheduleInfo";



function DisplayShedule(){
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
                        <td><DisplaySheduleInfo /></td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    {/* troisieme ligne */}

                    <tr>
                        <th>10h05 - 12h55</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    {/* 4e ligne */}

                    <tr>
                        <th>13h05 - 15h55</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    {/* 5e ligne */}

                    <tr>
                        <th>16h05 - 18h55</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                    {/* 6e ligne */}

                    <tr>
                        <th>19h05 - 21h55</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>

            </table>

        </section>
    )
}


export default DisplayShedule