import React from 'react';

function MovieInfo({ movie, setModalOpen }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <div className=" bg-dry flex-colo md:bg-opacity-90 xl:absolute top-0 left-40 right-0 bottom-0">
        <div className="container px-3 mx-auto 2xl:px-32 md:grid grid-cols-3 flex-colo py-10 md:py-20 gap-8">
          <div className="md:col-span-1 w-full md:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${movie?.image}`}
              alt={movie?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10">
              {/* Title */}
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie?.name}
              </h1>
              {/* flex items */}
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  HD 4K
                </div>
                {/* <FlexMovieItems movie={movie && movie} /> */}
              </div>
              {/* description */}
              <p className="text-text text-sm leading-7">{movie?.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
