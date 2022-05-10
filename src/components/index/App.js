import Home from "../home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Accueil from "../dashboard/accueil/Accueil";
import Ressource from "../dashboard/ressource/Ressource";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/dashboard' element = {<Accueil />} />
                <Route path = '/dashboard/ressource' element = {<Ressource />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;