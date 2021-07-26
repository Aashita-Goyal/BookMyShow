import React from "react";

// Components
import Plays from "../pages/Plays.page";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";


const OtherPagesLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      <Plays />
      {props.children}
    </>
  );
};

export default OtherPagesLayout;