import React, { useState } from 'react';
import SideBar from './SideBar';
import { Input } from '../../Components/Home/UsedInputs';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ToWatchMovies() {
  const [enteredName, setEnteredName] = useState('');
  const inputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const [MovieLists, setMovieLists] = useState([
    'Watched',
    'To Watch',
    'Favourites',
  ]);

  const onSubmitHandler = event => {
    MovieLists.push(enteredName);
    setMovieLists(MovieLists);
    setEnteredName('');
  };
  function onDeleteHandler(name) {
    const newList = MovieLists.filter(list => list !== name);
    setMovieLists(newList);
  }
  return (
    <SideBar>
      <div className="flex flex-col gap-6 my-10 px-10">
        <h2 className="text-xl font-bold text-text">Create New Watch List</h2>
        <Input
          placeholder="Enter your new list name"
          onChange={inputChangeHandler}
        />
        <button
          className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-text py-3  rounded"
          onClick={onSubmitHandler}
        >
          Create New List
        </button>
      </div>
      <div className="flex flex-col w-full grid-cols-1 bg-dry p-4 border border-gray-800 rounded-lg">
        <div className="flex flex-col gap-6 my-10 px-100">
          <h2 className="text-xl font-bold text-text px-10">
            Your watch Lists
          </h2>
          <div
            className={
              'w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-2 h-header overflow-y-scroll'
            }
          >
            {MovieLists.map((movieList, index) => (
              <div
                key={index}
                className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg "
              >
                <div id={index} className="col-span-10 flex flex-col px-2">
                  <Link
                    className="text-xs leading-6 font-medium text-text"
                    to="/single-watchlist"
                  >
                    {movieList}
                  </Link>
                </div>
                <div className="col-span-2 float-right flex-rows gap-2 ">
                  <button
                    className=" text-white flex-colo rounded w-19 h-6"
                    onClick={() => onDeleteHandler(movieList)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <WatchList Movies={Movies} /> */}
    </SideBar>
  );
}

export default ToWatchMovies;
