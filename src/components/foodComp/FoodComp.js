import useFetch from "../../hooks/useFetch";
import "../foodComp/food.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { BreakfastComp } from "./BreakfastComp";
import { useState } from "react";
import { LunchComp } from "./LunchComp";
import { AllComp } from "./AllComp";
import { DinnerComp } from "./DinnerComp";


const FoodComp = () => {
 
 const [com,setComp]=useState();
const handleClick = (e) => {
  // console.log(e.target.value);
  if(e.target.value==="Breakfast")
       setComp(( <BreakfastComp/>));
       else if(e.target.value==="Lunch")
       setComp(( <LunchComp/>));
       else if (e.target.value==="Dinner")
       setComp ((<DinnerComp/>));
       else if (e.target.value==="All")
       setComp ((<AllComp/>))

  console.log(com);
 
}
                

  return (
    <>
      <div className="foodcontainer">
        <div className="foodrow">
          <div className="foodcol">
            <h1>Enjoy Foods</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </div>

      <div className="fmenu">
        <h1>Menu</h1>
        <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={handleClick} value="ALL" control={<Radio /> } label="All"/>
        <FormControlLabel onClick={handleClick}  value="Breakfast" control={<Radio />} label="Breakfast" />
            <FormControlLabel onClick={handleClick} value="Lunch" control={<Radio />} label="Lunch" />
            <FormControlLabel onClick={handleClick} value="Dinner" control={<Radio />} label="Dinner" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="fooditems">{com}</div>
    
     
    </>
  );
};

export default FoodComp;

