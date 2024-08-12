import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../components/Login/LoginPage";



function AppRoute({ onLogin, isAuthenticated }) {
  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/" element={<LoginPage onLogin={onLogin} />} />
      ) : (
        <>
         {/* todo */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/character1" element={<CharacterPage1 />} />
          <Route path="/DiceRoller" element={<DiceRoller />} />
          <Route path="/LootGenerator" element={<LootGenerator />} />
          <Route path="/StoryGenerator" element={<StoryGenerator />} /> */}
         
        </>
      )}
      <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/"} />} />
    </Routes>
  );
}

export default AppRoute;
