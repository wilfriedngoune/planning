import React from "react";


//images ou logo
import logoUY1 from '../../../images/logos/logo_uy1.jpg'


//css
import '../../../styles/dashboard/programmation/programmation.css'

function PrintHeader(){
    return(
        <section>
            <section className = 'print-big-container'>
                {/* En francais */}
                <section className = 'print-header-elt'>
                    <div className = 'print-big-title'>UNIVERSITE DE YAOUNDE 1</div>
                    <div className = 'print-big-title'>FACULTE DES SCIENCES</div>
                    <br />
                    <div>Departement de la programation et du suivi des Activités Académiques</div>
                </section>
                {/* Logo de la fac */}
                <img src = {logoUY1} className = 'logo-uy1' alt = "Logo de l'universite de Yaounde 1"/>
                {/* En anglais */}
                <section className = 'print-header-elt'>
                    <div className = 'print-big-title'>THE UNIVERSITY OF YAOUNDE 1</div>
                    <div className = 'print-big-title'>FACULTY OF SCIENCES</div>
                    <br />
                    <div>Division of Programming and Academic activities follow up</div>
                </section>

            </section>
            <br /><br />
            <div className = 'academic-year-display'>Emploi de temps de lannée académique : 2020 - 2021</div>
        </section>
    )
}

export default PrintHeader