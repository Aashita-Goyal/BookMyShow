//eslint-disable-next-line 
import { Route } from "react-router-dom";

import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import OtherPagesHOC from "./HOC/OtherPages.HOC";

//Pages
import HomePage from "./pages/Home.page.jsx";
import Movie from "./pages/Movie.Page.jsx";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;




//JSX
function App() {
  return (
    <>
      <DefaultHOC path="/" exact Component = {HomePage} />
      <MovieHOC path="/movie/:id" exact Component = {Movie} />
      <OtherPagesHOC path="/plays" exact Component = {Plays} />
    </>
  ); 
}

export default App;
