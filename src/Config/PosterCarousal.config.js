const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
  
  export default settings;


/* const PosterCarousalsettings = {
    infinite: false,
    speed:500,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
        {
            breakpoints: 1024,
            PosterCarousalsettings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoints: 600,
            PosterCarousalsettings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                InitialSlide: 2,
            },
        },
        {
            breakpoints: 480,
            PosterCarousalsettings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ]

};

export default PosterCarousalsettings; */













 