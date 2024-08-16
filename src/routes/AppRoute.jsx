import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import CharacterPage1 from "../pages/characterPage1";

import LoginPage from "../pages/LoginPage";
import DiceRoller from "../pages/DicePage";
import LootGenerator from "../components/Loot/LootGenerator";
import StoryGenerator from "../components/Story/StoryGenerator";

function AppRoute({ onLogin, isAuthenticated }) {
  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/" element={<LoginPage onLogin={onLogin} />} />
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/character1" element={<CharacterPage1 />} />
          <Route path="/DicePage" element={<DiceRoller />} />
          <Route path="/LootGenerator" element={<LootGenerator />} />
          <Route path="/StoryPage" element={<StoryGenerator />} />
          
        </>
      )}
      <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/"} />} />
    </Routes>
  );
}

export default AppRoute;
