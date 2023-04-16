import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) => isActive  ? "bg-blue-950 p-2 rounded" : ""
        }
      >
        {children}
      </NavLink>
    );
};

export default ActiveLink;