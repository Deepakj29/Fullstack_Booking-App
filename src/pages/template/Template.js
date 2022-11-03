import React from "react";
import './template.css';
import { NavLink,Outlet } from "react-router-dom";
import { Footercomp } from "../../components/footer/Footercomp";

export const Template=()=>{
    return(
        <>
        <div className="templatecontainer">
            <div className="templatewrap" >
                <div className="tempcol">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
            <NavLink to='/Room'>Rooms   </NavLink>
            <NavLink to='/Food'>Food</NavLink>
            </div>
            </div>
        <Outlet/>
        <Footercomp/>
        </div>
        </>
    )
};