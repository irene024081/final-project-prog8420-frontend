import React, { useContext } from 'react';
import { FaListAlt, FaHeart } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import Layout from '../../Layout/Layout';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

function SideBar({ children }) {
  const authCtx = useContext(AuthContext);

  const SideLinks = [
    {
      name: 'Update Profile',
      link: '/profile',
      icon: FiSettings,
    },
    {
      name: 'My Watch List',
      link: '/to-watch',
      icon: FaHeart,
    },
    {
      name: 'My Library',
      link: '/watched',
      icon: FaListAlt,
    },
    {
      name: 'Change Password',
      link: '/password',
      icon: RiLockPasswordLine,
    },
  ];
  const active = 'bg-dryGray text-submain';
  const hover = 'hover:text-white hover:bg-main';
  const inActive =
    'rounded font-medium text-sm transitions flex gap-3 items-center p-4';
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  const onLogoutHandler = () => {
    authCtx.onLogout();
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="lg:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md lg:mb-0 mb-5">
            {
              // SideBar Links
              SideLinks.map((link, index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon /> <p>{link.name}</p>
                </NavLink>
              ))
            }
            <NavLink
              onClick={onLogoutHandler}
              to={'/'}
              key={SideLinks.length}
              className={Hover}
            >
              <RiLockPasswordLine /> <p>Log Out</p>
            </NavLink>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="10"
            data-aos-offset="200"
            className="col-span-6 rounded-md bg-dry border border-gray-800 p-6"
          >
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SideBar;
