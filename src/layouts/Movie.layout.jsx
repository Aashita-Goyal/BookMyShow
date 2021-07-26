import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

//context
import { MovieContext } from "../context/movie.context";


// Components
//import MovieNavbar from "../components/Navbar/movieNavbar.component";
import Movie from "../pages/Movie.Page";


const MovieLayout = (props) => {

 const { id } = useParams();
  const {movie, setMovie} = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data)
    };
    requestMovie();
  }, [id,movie,setMovie])





    return (
        <>
          <Movie />
          {props.children}
        </>
        
    );
};

export default MovieLayout;