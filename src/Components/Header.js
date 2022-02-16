import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header =()=>{
    return(
        <div>
            <h1>Browser Router</h1>

            <NavLink to="/home">Home</NavLink> #
            <NavLink to="/contact">Contact</NavLink>  #
            <NavLink to="/about">About</NavLink>  #
            <NavLink to="/team">Team</NavLink>  #
            <NavLink to="/support">Support</NavLink>
        </div>
    )
}