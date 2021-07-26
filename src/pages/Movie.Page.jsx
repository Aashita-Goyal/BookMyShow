import React, { useContext, useState, useEffect } from "react";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router";

//components
import MovieNavbar from "../components/Navbar/movieNavbar.component";
import MovieHero from "../components/MovieHero/MovieHero.component";

import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../Config/TempPosters.config";

//context
import { MovieContext } from "../context/movie.context";


const Movie = () => {

  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const requestCast = async() => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  },[id]);


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };




    return (
        <>
          <div>
              <MovieNavbar />
              <MovieHero />
              <div className="my-12 container  px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            {movie.overview}
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & crew</h2>

          <div className="flex flex-wrap gap-4">

            {cast.map((castData) => (
              <Cast
              image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
              castName={castData.original_name}
              role={castData.character}
            />
            ))}
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="You Might Also like"
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="BMS XCLUSIVE"
            isDark={false}
          />
        </div>
      </div>
          </div>
          
        </>
    );
};

export default Movie;
