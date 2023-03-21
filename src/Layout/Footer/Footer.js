import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const Links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'About Us',
          link: '/about-us',
        },
        {
          name: 'Contact Us',
          link: '/contact-us',
        },
        {
          name: 'Movies',
          link: '/movies',
        },
      ],
    },
    {
      title: 'Top Categories',
      links: [
        {
          name: 'Action',
          link: '#',
        },
        {
          name: 'Romantic',
          link: '#',
        },
        {
          name: 'Drama',
          link: '#',
        },
        {
          name: 'Historical',
          link: '#',
        },
      ],
    },
    {
      title: 'My Account',
      links: [
        {
          name: 'Dashboard',
          link: '/dashboard',
        },
        {
          name: 'My Favorites',
          link: '/favorite',
        },
        {
          name: 'Profile',
          link: '/profile',
        },
        {
          name: 'Change Password',
          link: '/password',
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-2  md:grid-cols-7 xl:grid-cols-12 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
      {Links.map((link, index) => (
        <div
          key={index}
          className="col-span-1  md:col-span-2 lg:col-span-2 pb-3.5 sm:pb-0"
        >
          <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
            {link.title}
          </h3>
          <ul className="text-sm flex flex-col space-y-3">
            {link.links.map((text, index) => (
              <li key={index}>
                <Link to={text.link}>{text.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Footer;
