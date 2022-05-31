import React, {useEffect, useState} from "react";
import axios from "axios";

//css
import '../../../styles/dashboard/dashboardHeader.css'


//Les urls
const Url = require('../../../url')


function RessourceLinks(){

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
    return(
        <section className = 'links-container'>
            <span className = 'link' onClick = {() => window.location.href = '/dashboard/'}>Accueil</span>
            {userInfo.role === 'admin' ? <span className = 'link active-sign'>Ressource</span> : null}
            <span className = 'link' onClick = {() => window.location.href = '/dashboard/programmation'}>Programmation</span>
            <span className = 'link'>Réservation</span>
            <span className = 'link'>Messages</span>
        </section>
    )
}


export default RessourceLinks