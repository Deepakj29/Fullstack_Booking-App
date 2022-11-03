import React from "react";
import '../footer/footercomp.css';

export const Footercomp=()=>{
    return(
        <>
        <div className="footercont">
            <div className="footerrow">
                <div className="footcol">
                    <h4>Home</h4>
                    <ul>
                        <li>About us</li>
                        <li>Places</li>
                        <li>Services</li>
                        <li>Destination</li>
                    </ul>
                </div>
                <div className="footcol">
                    <h4>Practice Area</h4>
                   <ul>
                    <li>Travel</li>
                    <li>Places</li>
                    <li>Destination</li>
                    <li>Tour</li>
                   </ul>
                </div>
                <div className="footcol">
                    <h4>Services</h4>
                    <ul>
                        <li>Tour</li>
                        <li>Swimming</li>
                        <li>Kayak</li>
                        <li>Surfing</li>
                    </ul>
                </div>
                <div className="footcol">
                    <h4>contact</h4>
                    <p>No:1,Devikulam,Munnar,Kerala</p>
                </div>
              
            </div>
      
        </div>
        </>
    )
}