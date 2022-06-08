import React from "react";

//css
import '../../../styles/dashboard/ressource/salle-batiment.css'



function SalleLoading(){
    let salle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return(
        <section className = 'load-big-container'>
            <section> 
                <div className = 'load-title'></div>
                <section className = 'display-salle'>
                    {
                        salle.map(
                            (salle) =>
                            <div className = 'load-unit-salle'></div>
                        )
                    }
                </section>
                <br />

                <div className = 'load-title'></div>
                <section className = 'display-salle'>
                    {
                        salle.map(
                            (salle) =>
                            <div className = 'load-unit-salle'></div>
                        )
                    }
                </section>
                <br />
            </section>
        </section>
    )
}


export default SalleLoading