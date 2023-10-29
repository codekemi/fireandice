import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Houses from "../pages/Houses/Houses.js"; // Importing Houses
import Characters from "../pages/Characters/Characters.js"; // Importing Characters
import Books from "../pages/Books/Books.js"; // Importing Books

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Houses" element={<Houses />} />
      <Route path="/Characters" element={<Characters />} />
      <Route path="/Books" element={<Books />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default AppRoute;
