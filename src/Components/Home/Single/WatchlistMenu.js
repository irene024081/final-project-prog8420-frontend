import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const myWatchLists = ['watchlist1', 'watchlist2', 'watchlist3', 'watchlist4'];
function WatchlistMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left grid-cols-5">
      <Menu.Button className="inline-flex col-span-1 justify-center border border-gray-800  w-50 text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
        Add to WatchList
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <button className="inline-flex col-span-4 mx-5 justify-center border border-gray-800  w-50 text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
        Watched
      </button>
      <Menu.Items className="absolute z-10 mt-1 bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
        {myWatchLists.map((list, index) => (
          <div className="px-1 py-1 ">
            <Menu.Item
              as="a"
              key={index}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-submain text-white' : 'text-main'
                }`
              }
            >
              {list}
            </Menu.Item>
          </div>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default WatchlistMenu;
