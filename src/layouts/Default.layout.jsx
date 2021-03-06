import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
import HomePage from "../pages/Home.page";
//import Plays from "../pages/Plays.page";


const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      <HomePage />
      {props.children}
    </>
  );
};

export default DefaultLayout;