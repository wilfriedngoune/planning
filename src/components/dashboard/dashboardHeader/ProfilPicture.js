import React, { useState } from "react";
import Profil from "./Profil";

//css
import '../../../styles/dashboard/dashboardHeader.css'

function ProfilPicture(){
    //Etat de la variable qui s'occupe de l'affichage du profil
    const [profil, setProfil] = useState(false)

    //Methode qui gere la gestion des profil
    const handleProfil = () => {
        {profil ? setProfil(false) : setProfil(true)}
    }


    return(
        <section>
            <div onClick = {() => handleProfil()} className = 'header-avatar'>W</div>
            {profil ? <Profil /> : null}
        </section>
    )
}


export default ProfilPicture