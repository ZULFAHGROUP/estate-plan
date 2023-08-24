import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainMenu from '../../../configs/mainMenu';

export default function SideMenu() {
  const location = useLocation();
  return (
    <ul className="mt-12">
      {MainMenu.map((menu) => {
        const isActive =
          (menu.pathActive && menu.pathActive.find((el) => el === location.pathname)) ||
          location.pathname === menu.path ||
          (location.pathname.startsWith(menu.path) && menu.path !== '/');

        return (
          <Link to={menu.path} key={menu.path}>
            <li
              className={` ${
                isActive ? 'text-white font-bold' : 'text-gray-300'
              } flex w-full justify-between hover:text-white cursor-pointer items-center mb-6`}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-grid"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2">{menu.label}</span>
              </div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
