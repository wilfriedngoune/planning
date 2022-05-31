import React from "react";


//css
import '../../../styles/dashboard/profil.css' 


function Profil(){
    return(
        <section className = 'profil-container'>
            <section className = 'pp-and-email-container'>
                <div className = 'display-pp'><br />W</div>
                <br />
                <div className = 'display-name'>Wilfried NGOUNE</div>
                <div className = 'display-email'>{localStorage.getItem('email')}</div>
            </section>
            <hr />


        </section>
    )
}

export default Profil