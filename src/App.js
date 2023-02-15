
import Header from "./Header";

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from "./MainPage";
import Questionnaire from "./Questionnaire";
import Registration from "./Registration";
import Profile from "./Profile";
import AboutProject from "./AboutProject";
import InfoPets from "./InfoPets";

 


 
export default function App() {
    return (
    <>
        
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<MainPage/>}/>
                <Route path="/questionnaire" element={<Questionnaire/>}/>
                <Route path="/about" element={<AboutProject/>}/>
                <Route path="/pets" element={<InfoPets/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
        

    </>
    )
}