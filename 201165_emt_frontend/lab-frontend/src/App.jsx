import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";

import HomePage from "./ui/pages/HomePage/HomePage.jsx";
import HostsPage from "./ui/pages/HostsPage/HostsPage.jsx";
import CountriesPage from "./ui/pages/CountriesPage/CountriesPage.jsx";


function App() {
  return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/accommodations" element={<HostsPage/>}/>
           <Route path="/hosts" element={<HostsPage/>}/>
           <Route path="/countries" element={<CountriesPage/>}/>
         </Routes>
       </BrowserRouter>
  )
}

export default App
