import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Component
import {NextArrow, PrevArrow} from "./Arrows.component";




const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        //async
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();

        //Race condition
        //A
        //B
       
    }, []);


    const settingsLG = {
        arrows:true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };


    return (
    <>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
          {
              images.map((image) => (
                  <div className="w-full h-56 md:h-80 py-3">
                      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                           alt= "testing" 
                           className="w-full h-full rounded-md"/>
                  </div>
              ))
          }
      </HeroSlider> 
      </div>

      <div className="hidden lg:block">
      <HeroSlider {...settingsLG}>
          {
              images.map((image) => (
                  <div className="w-full h-96 px-2 py-3">
                      <img src= {`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                           alt= "testing" 
                           className="w-full h-full rounded-md"/>
                  </div>
              ))
          }
      </HeroSlider> 
      </div>
    </>
    );
};

export default HeroCarousal; 



/*const images = [
        "https://in.bmscdn.com/promotions/cms/creatives/1626372139417_bsm_1280x500_chickflick_2.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626802256988_tributetoricharddonner1280x500webbannerios1.jpg",
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1626128665085-483747621778?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=610&q=80",
        "https://images.unsplash.com/photo-1626050954744-92bf034ce476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        "https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80",
        "https://in.bmscdn.com/promotions/cms/creatives/1626791647959_honestthief_1280x500webbannerios.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
      ];
*/