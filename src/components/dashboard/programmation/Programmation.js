import React, { useState } from "react";
import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import ProgrammationLinks from "./ProgrammationLinks";
import '../../../styles/dashboard/programmation/programmation.css'
import ProgrammationSimpleUser from "./ProgrammationSimpleUser";
import ProgrammationAdmin from "./ProgrammationAdmin";


function  Programmation() {

   
    return(
        <section>
            <section className = 'dashboard-header-container'>
                <Logo />
                <section className = 'links-and-picture'>
                    <ProgrammationLinks />
                    <ProfilPicture />
                </section>
            </section>
            <br /><br /><br />
            <ProgrammationAdmin />
            {/* <ProgrammationSimpleUser /> */}
        </section>
    )
    
}


export default Programmation