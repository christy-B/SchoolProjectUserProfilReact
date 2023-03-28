import React from "react";
import User from "./Component/View/User";
import Profil from "./Component/View/Profil";
import { Routes, Route } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>

  );
}

export default App;
