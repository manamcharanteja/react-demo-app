import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-40 bg-indigo-500">
      <ul className="pt-4 pl-0">
        <Link to="/" className="no-underline text-white">
        <li
          className={`mb-4 pl-4  ${currentTab === 0 ? 'bg-indigo-600  pt-1 pb-1' : ''}`}
          onClick={() => setCurrentTab(0)}
        >
            Home
        </li>
          </Link>
        <Link to="/chat" className="no-underline text-white">
        <li
          className={`mb-4 pl-4 ${currentTab === 1 ? 'bg-indigo-600  pt-1 pb-1' : ''}`}
          onClick={() => setCurrentTab(1)}
        >
            Chat
        </li>
          </Link>
        <Link to="/calendar" className="no-underline text-white">
        <li
          className={`mb-4 pl-4  ${currentTab === 2 ? 'bg-indigo-600  pt-1 pb-1' : ''}`}
          onClick={() => setCurrentTab(2)}
        >
            Calendar
        </li>
          </Link>
        <Link to="/about" className="no-underline text-white">
        <li
          className={`mb-4 pl-4 ${currentTab === 3 ? 'bg-indigo-600 pt-1 pb-1 ' : ''}`}
          onClick={() => setCurrentTab(3)}
        >
            About Us
        </li>
          </Link>
        <Link to="/settings" className="no-underline text-white">
        <li
          className={`mb-4 pl-4  ${currentTab === 4 ? 'bg-indigo-600 pt-1 pb-1' : ''}`}
          onClick={() => setCurrentTab(4)} 
        >
            Settings
        </li>
          </Link>
      </ul>
    </div>
  );
};

export default SideBar;
