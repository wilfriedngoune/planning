import Home from "../home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Accueil from "../dashboard/accueil/Accueil";
import Ressource from "../dashboard/ressource/Ressource";
import VideoP from "../dashboard/ressource/videoProjecteur/VideoP";
import Vehicule from "../dashboard/ressource/vehicule/Vehicule";
import EspaceVert from "../dashboard/ressource/espaceVert/EspaceVert";


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/dashboard' element = {<Accueil />} />
                <Route path = '/dashboard/ressource/salle' element = {<Ressource />} />
                <Route path = '/dashboard/ressource/video-projecteur' element = {<VideoP />} />
                <Route path = '/dashboard/ressource/vehicule' element = {<Vehicule />} />
                <Route path = '/dashboard/ressource/espace-vert' element = {<EspaceVert />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;