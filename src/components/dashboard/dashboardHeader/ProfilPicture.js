import React, { useState, useEffect } from "react";
import Profil from "./Profil";
import axios from "axios";


//css
import '../../../styles/dashboard/dashboardHeader.css'


//Les url
const Url = require('../../../url')



function ProfilPicture(){
    //Etat de la variable qui s'occupe de l'affichage du profil
    const [profil, setProfil] = useState(false)

    //Methode qui gere la gestion des profil
    const handleProfil = () => {
        {profil ? setProfil(false) : setProfil(true)}
    }

    //Constante qui contient les information du user connecte
    const[userInfo, setUserInfo] = useState({})

    //Recuperation des elements du user dans la base de donne
    useEffect(() => {
        let link = Url.devUrl() + localStorage.getItem("role") + localStorage.getItem("id"); 
        console.log(link)
        axios.get(link, 
        ).then((res) => {
            console.log(res.data)
            setUserInfo(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])

    //Fonction qui prends la premiere lettre du nom
    let avatar = []
    if(userInfo.noms){
        avatar = userInfo.noms.split('')
        
    }

    return(
        <section>
            <div onClick = {() => handleProfil()} className = 'header-avatar'>{avatar[0]}</div>
            {profil ? <Profil email = {userInfo.email} noms = {userInfo.noms} pp = {avatar[0]} role = {userInfo.role}/> : null}
        </section>
    )
}


export default ProfilPicture