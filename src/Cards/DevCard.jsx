import React from "react";

const WebsiteDevCard = ({
  Title,
  imgUrl,
  Cardtitle1,
  Cardtitle2,
  Cardtitle3,
  pricing1,
  pricing2,
  pricing3,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
  skill13,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 justify-center gap-8 mx-20 border-b border-gray-500">
        <div className=" rounded-lg h-56 w-96 border border-blue-500 ml-28 mt-24 ">
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill1}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill2}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill3}
              </span>
            </div>
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill4}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill5}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill6}
              </span>
            </div>
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill7}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill8}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill9}
              </span>
            </div>
            <div className="flex flex-wrap justify-center">
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill10}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill11}
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {skill12}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <div class="flex items-center justify-center ">
            <img src={imgUrl} class="h-12 w-12 mt-5" />
            <h3 class="text-center font-bold text-2xl text-white relative mt-5 mr-2">
              {Title}
            </h3>
          </div>
          <p className="text-center font-semibold text-sm text-white relative mt-5 px-10">
            <ul className="flex flex-col max-w-auto ">
              <span class="inline-block bg-gray-800 rounded px-3 py-1 tracking-wider text-xl font-semibold text-white mb-2 transition duration-300 transform hover:scale-105">
                {Cardtitle1}
                <p class="text-3xl font-bold text-gray-400 mb-2">{pricing1}</p>
              </span>

              <span className="inline-block bg-gray-800 rounded px-3 py-1 tracking-wider text-xl font-semibold text-white mb-2 transition duration-300 transform hover:scale-105">
                {Cardtitle2}
                <p class="text-3xl font-bold text-gray-400 mb-2">{pricing2}</p>
              </span>
              <span className="inline-block bg-gray-800 rounded px-3 py-1 tracking-wider text-xl font-semibold text-white mb-2 transition duration-300 transform hover:scale-105">
                {Cardtitle3}
                <p class="text-3xl font-bold text-gray-400 mb-2">{pricing3}</p>
              </span>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default WebsiteDevCard;
