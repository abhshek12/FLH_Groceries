import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Header/Header";
import Home from "./Home/Home";
import FestivalKits from "./Kits/FestivalKits/FestivalKits";
import Groceries from "./Kits/Groceries/Groceries";
import Fruites from "./Pages/Fruites/Fruites";
import Meat from "./Pages/Meats/Meat";
import Vegitables from "./Pages/Vegitables/Vegitables";
import Profile from "./Pages/Profile/Profile";
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/Signup/Signup";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div style={{ paddingTop: "90px", paddingLeft: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festival-kits" element={<FestivalKits />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/fruites" element={<Fruites />} />
          <Route path="/meats" element={<Meat />} />
          <Route path="/vegitables" element={<Vegitables />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;