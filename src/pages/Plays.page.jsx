import React from "react";

// component
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4 pl-6">
            <h2 className="text-2xl font-bold mb-4">Plays in NCR</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309176-acvpbmcyev-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 pl-10">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tag={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tag={["Hindi","Punjabi", "English", "Tamil", "Telegu" ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;