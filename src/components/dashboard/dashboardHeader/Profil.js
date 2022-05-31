import React, { Fragment } from "react";


//css
import '../../../styles/dashboard/profil.css' 

//Image
import adminImage from '../../../images/admin.png'


//Les urls
const Url = require('../../../url')



function Profil({email, noms, pp, role}){


    

    return(
        <section className = 'profil-container'>
            <section className = 'pp-and-email-container'>
                <div className = 'display-pp'><br />{pp}</div>
                <br />
                <div className = 'display-name'>{noms}{role === 'admin' ? <Fragment><img src = {adminImage} className = 'admin-image' alt = "Image du signe de l'admin"  /></Fragment> : null}</div>
                <div className = 'display-email'>{email}</div>
            </section>
            <hr />


        </section>
    )
}

export default Profil