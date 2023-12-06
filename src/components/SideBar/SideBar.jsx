import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './SideBar.css';
import { IconContext } from 'react-icons';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const user = useSelector((store) => store.user);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              if (!user.id && (item.title === 'Guitars' || item.title === 'Amps' || item.title === 'Accessories' || item.title === 'Following' || item.title === 'Liked' || item.title === 'Add Gear' || item.title === 'All Gear')) {
                return null;
              }

              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='spacer' >{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
