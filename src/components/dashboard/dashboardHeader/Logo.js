import React from "react";
import logo_blanc from '../../../images/logos/logo_blanc.png'
import '../../../styles/dashboard/dashboardHeader.css'


function Logo(){
    return(
        <section>
            <img src = {logo_blanc} alt = 'Logo blue dans le dashboard' className = 'header-dashboard-logo' />
        </section>
    )
}


export default Logo