import React, {useState, useEffect} from "react";
import axios from "axios";

//css
import '../../../styles/dashboard/dashboardHeader.css'


//les urls
const Url  = require('../../../url')


function ProgrammationLinks(){

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
            <span className = 'link' onClick = {() => window.location.href = '/dashboard'}>Accueil</span>
            {userInfo.role === 'admin' ? <span className = 'link' onClick = {() => window.location.href = '/dashboard/ressource/salle'}>Ressource</span> : null}
            <span className = 'link active-sign'>Programmation</span>
            <span className = 'link'>Réservation</span>
            <span className = 'link'>Messages</span>
        </section>
    )
}


export default ProgrammationLinks