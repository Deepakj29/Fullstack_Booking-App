import React from "react";
import './homeComp.css';
import Button from '@mui/material/Button';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import HikingIcon from '@mui/icons-material/Hiking';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  CardActionArea from '@mui/material/CardActionArea';
import { useState } from "react";
import "../homeComp/header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';




export const HomeComp=()=>{
    const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/", { state: { destination, date, options } });
  };

    return(
        < div className="all">
        <div className="homecontainer">
            <div className="homeitem">
              <div className="homeit" >
                    <h1>Blueberg Luxury</h1>
                    <p>Feel The Nature of God</p>
              <Button> <a href="/Room"> Our Rooms</a></Button>
                </div>
                  </div>     
            </div>
           
           <div className="header">
            <div className="headerSearch">
              <div className="headerSearchItem">
              {/* <Autocomplete sx={{ height:5, width:200,position:"relative",bottom:25, }}
                            options={Rooms.map((option) => option.title)}
                            renderInput={(params) => <TextField  sx={{color:"whitesmoke",backgroundColor:"white" }}  {...params} label="Room Type" />}
                        />  */}
                <input
                  style={{border:"0",backgroundColor:"white",padding:"10px",borderRadius:"10px"}}
                  type="text"
                  placeholder="Room Type"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">    
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">   
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
            </div>
        






            
            <div className="serv">
                <div className="servhead"><h1>Services</h1></div>
                <div className="servitem">
                <div className="servit"><p><LocalBarIcon color="secondary"sx={{ fontSize: 40 }}/></p><h1>Welcome Drink</h1><p>best service providede by our adventures natured staffs</p></div>
                <div className="servit"><p><HikingIcon color="secondary"sx={{ fontSize: 40 }}/></p><h1>Trekking</h1><p>best service providede by our adventures natured staffs</p></div>
                <div className="servit"><p><AirportShuttleIcon  color="secondary"sx={{ fontSize: 40 }}/></p><h1>Free Pickup</h1><p>best service providede by our adventures natured staffs</p></div>
                <div className="servit"><p><SportsKabaddiIcon color="secondary"sx={{ fontSize: 40 }}/></p><h1>Unlimited Games</h1><p>best service providede by our adventures natured staffs</p></div>
                </div>
            </div>



            <div className="featured">
                <div className="featuredhead"><h1>Featured Rooms</h1></div>
                <div className="carditem">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            
                            component="img"
                            height="300"
                            image="../Assets/room-1.jpeg"
                            alt="green iguana"
                        />
                        <CardContent className="cont" >
                            <p>Double Deluxe</p>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image="../Assets/details-2.jpeg"
                            alt="green iguana"
                        />
                        <CardContent className="cont" >
                            <p>Family Deluxe</p>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image="../Assets/room-11.jpeg"
                            alt="green iguana"
                        />
                        <CardContent className="cont" >
                            <p>Luxury</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            </div>
        


        </div>
        
    )
};
// const Rooms=[
//   { title:'Double Deluxe' },
//   {title:'Family Deluxe'},
//   {title:'Premium Deluxe'},
//   {title:'Luxury Deluxe'},
// ];