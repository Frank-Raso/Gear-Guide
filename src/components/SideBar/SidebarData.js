import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from "react-icons/bs";
import * as MuIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHouseUser />,
    cName: 'nav-text'
  },
  {
    title: 'All Gear',
    path: '/all',
    icon: <FaIcons.FaBoxOpen/>,
    cName: 'nav-text'
  },
  {
    title: 'Guitars',
    path: '/guitars',
    icon: <FaIcons.FaGuitar />,
    cName: 'nav-text'
  },
  {
    title: 'Amps',
    path: '/amps',
    icon: <BsIcons.BsSoundwave />,
    cName: 'nav-text'
  },
  {
    title: 'Accessories',
    path: '/accessories',
    icon: <MuIcons.MdCable />,
    cName: 'nav-text'
  },
  {
    title: 'Add Gear',
    path: '/addgear',
    icon: <FaIcons.FaPlus/>,
    cName: 'nav-text'
  }
];