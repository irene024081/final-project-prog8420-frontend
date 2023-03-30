import React, { Fragment } from 'react';
import Rating from '../Stars';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

function MovieReview(props) {
  return (
    <Fragment>
      <div className="col-span-3 flex flex-col gap-6">
        <h3 className="text-xl text-text font-semibold">
          {props.singleUser ? 'Your  Review' : 'Public  Reviews'}
        </h3>
        <div
          className={`w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header ${
            props.singleUser ? '' : 'overflow-y-scroll'
          }`}
        >
          {props.Reviews.map((user, i) => (
            <div
              key={i}
              className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg"
            >
              <div className="col-span-2 bg-main hidden md:block">
                <img
                  src={`/images/${user ? user.image : 'user.png'}`}
                  alt={user.fullName}
                  className="w-full h-24 rounded-lg object-cover"
                />
              </div>
              <div className="col-span-7 flex flex-col gap-2">
                <h2>{user?.fullName}</h2>
                <p className="text-xs leading-6 font-medium text-text">
                  {user?.message}
                </p>
                {props.singleUser ? (
                  <div className="float-right flex-rows gap-2 ">
                    <button
                      className=" text-white flex-colo rounded w-6 h-6"
                      onClick={props.onDelete}
                    >
                      <MdDelete />
                    </button>
                    <button
                      className=" text-white flex-colo rounded w-6 h-6"
                      onClick={props.onDelete}
                    >
                      <FaEdit />
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </div>
              {/* rates */}
              <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                <Rating value={user?.rate} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default MovieReview;
