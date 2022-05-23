//Les dependances de react
import React, {useEffect, useState} from "react";
import axios from 'axios';





//css
import '../../styles/login/login.css'


//Les urls
const Url = require('../../url');



function Signin(){

    //Etat de la variable qui change la categorie du nouveau user qui sinscrit
    const [userCat, setUserCat] = useState('Etudiant');
    //Etat des variable des valeur du formulaire

    const [noms, setNoms] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Etat de la variable qui active le loader
    const [load, setLoad] = useState('Enregistrer')
    //Erreur lors de l'envoie du formulaire
    const [err, setErr] = useState(false)



    //Methode qui envoi les elements d'un nouvel utilisateur dans la bd.

    const handleSubmit = () => {
        console.log('envoie des donne')
        console.log(Url.devUrl())
        if(userCat === 'Etudiant'){
            axios.post(Url.devUrl() + 'etudiant/',
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
                    setLoad('Loading...')
                    const redirect = setTimeout(() => {
                        window.location.href = "/dashboard"
                    }, 1500);
                }
                else{
                    setErr(true)
                }
            }).then((res) => {
                console.log('reponse 2', res)
                
            }).catch((err) =>{
                throw err
            })

        }
    }

    //lire les donne

    useEffect(() => {
        console.log('jessi')
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
                <span className = 'popup-title'>Inscription</span>
                <br /><br />
                <form>
                    <input type = 'text' id = 'noms' className = 'login-field' placeholder = 'Noms et Prenoms' name = 'noms' onChange = {() => setNoms(document.getElementById('noms').value)}/>

                    <input type = 'email' id = 'email' className = 'login-field' placeholder = 'Email' name = 'email' onChange = {() => setEmail(document.getElementById('email').value)}/> <span className = 'red-sign'>*</span>
                    
                    <input type = 'password' id = 'password' className = 'login-field' placeholder = 'Mot de passe' name = 'password' onChange = {() => setPassword(document.getElementById('password').value)}/> <span className = 'red-sign'>*</span>

                    <select className = 'signin-select' id = 'userCat' onChange = {() => setUserCat(document.getElementById('userCat').value)}>
                        <option>En tant que..</option>
                        <option>Etudiant</option>
                        <option>Enseignant</option>
                    </select> <span className = 'red-sign'>*</span>

                    <br /><br />
                    {err ? <span className = 'red-sign'>Erreur !</span> : null}

                    <div 
                    className = 'login-submit' 
                    onClick = {() => handleSubmit()}>
                    {load} 
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Signin