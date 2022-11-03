import React from "react";
import "../contactComp/contactcomp.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export const ContactComp=()=>{
    return(
        <>
        <div className="contcontainer">
            <div className="controw">
                <div className="contcol">
                    <h1>Contact</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </div>
        </div>
        <div className="contcol1">
            <div className="focon">
                <div className="foncol">
                <h1>GET IN TOUCH</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="email" variant="outlined" />
                <TextField id="outlined-basic" label="Message" variant="outlined" />
                <Button>Submit</Button>
                </div>
            </div>
                </div>
        </>
    )
}