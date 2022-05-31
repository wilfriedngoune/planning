//Les dependances de react
import React, {useEffect, useState} from "react";
import axios from 'axios';





//css
import '../../styles/login/login.css'
import Loader from "./Loader";


//Les urls
const Url = require('../../url');



function Signin({setActivateSignin}){

    //Etat de la variable qui change la categorie du nouveau user qui sinscrit
    const [userCat, setUserCat] = useState('etudiant/');
    const handleChangeCat = (cat) => {
        if(cat === "Enseignant"){
            setUserCat('enseignant/')
        }
        if(cat === "Etudiant" || cat === "En tant que.."){
            setUserCat('etudiant/')
        }
    }


    //Etat des variable des valeur du formulaire

    const [noms, setNoms] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Etat de la variable qui active le loader
    const [load, setLoad] = useState(false)

    //Erreur lors de l'envoie du formulaire
    const [err, setErr] = useState(false)



    //Methode qui envoi les elements d'un nouvel utilisateur dans la bd.

    const handleSubmit = () => {
        
        debugger 
        axios.post(Url.devUrl() + userCat,
        {
            "noms" : noms,
            "email" : email,
            "password" : password
        },

        {
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            }
        }

        ).then((res) => {
            
            console.log('hjklkhhj')
            console.log('response 1', res)
            if(res.status === 200){
                setLoad(true)
                const redirect = setTimeout(() => {
                    window.location.href = "/dashboard"
                }, 2000);
            }
            else{
                setErr(true)
            }
        }).catch((err) =>{
            throw err
        })
        
}

    //lire les donne

    useEffect(() => {
        axios.get(Url.devUrl() + 'etudiant/',

        ).then((res) => {
            console.log('resultat de la requette')
            console.log(res.data)
        }).catch((err) => {
            throw err
        })
    }, [])
    




    return(
        <section className = 'login-container'>
            <br /><br /><br /><br /><br />
            <section className = 'login-popup'>
                <section className = 'login-header'>
                    <span className = 'popup-title'>Inscription</span>
                    
                    <span class="material-symbols-outlined close-pop" onClick = {() => setActivateSignin(false)}>
                    close
                    </span>
                </section>
                <br /><br />
                <form>
                    <input type = 'text' id = 'noms' className = 'login-field' placeholder = 'Noms et Prenoms' name = 'noms' onChange = {() => setNoms(document.getElementById('noms').value)}/>

                    <input type = 'email' id = 'email' className = 'login-field' placeholder = 'Email' name = 'email' onChange = {() => setEmail(document.getElementById('email').value)}/> <span className = 'red-sign'>*</span>
                    
                    <input type = 'password' id = 'password' className = 'login-field' placeholder = 'Mot de passe' name = 'password' onChange = {() => setPassword(document.getElementById('password').value)}/> <span className = 'red-sign'>*</span>

                    <select className = 'signin-select' id = 'userCat' onChange = {() => handleChangeCat(document.getElementById('userCat').value)}>
                        <option>En tant que..</option>
                        <option>Etudiant</option>
                        <option>Enseignant</option>
                    </select> <span className = 'red-sign'>*</span>

                    <br /><br />
                    {err ? <span className = 'display-err'>Erreur !</span> : null}

                    <div 
                    className = 'login-submit' 
                    onClick = {() => handleSubmit()}>
                    {load ? <Loader /> : <b>Enregistrer</b>}
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Signin