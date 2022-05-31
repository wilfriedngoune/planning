import React, { useState, useEffect } from "react";
import axios from "axios";

//Composants
import Logo from "../dashboardHeader/Logo";
import ProfilPicture from "../dashboardHeader/ProfilPicture";
import ProgrammationLinks from "./ProgrammationLinks";
import ProgrammationSimpleUser from "./ProgrammationSimpleUser";
import ProgrammationAdmin from "./ProgrammationAdmin";


//Css
import '../../../styles/dashboard/programmation/programmation.css'


//Les urls
const Url = require('../../../url')

function  Programmation() {

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
        <section>
            <section className = 'dashboard-header-container'>
                <Logo />
                <section className = 'links-and-picture'>
                    <ProgrammationLinks />
                    <ProfilPicture />
                </section>
            </section>
            <br /><br /><br />
            {userInfo.role === 'admin' ? <ProgrammationAdmin /> : <ProgrammationSimpleUser />}
        </section>
    )
    
}


export default Programmation