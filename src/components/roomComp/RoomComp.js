import React from "react";
import "../roomComp/roomcomp.css";
import Button from '@mui/material/Button';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import { Checkbox } from "@mui/material";
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import dayjs from 'dayjs';


export const RoomComp = () => {
    // const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    // const handleChange = (newValue) => {
    //   setValue(newValue);
    // };
    return (
        <>
            <div className="roomcontainer">
                <div className="roomitem">
                    <div className="roomit" >
                        <h1>Avaliable Rooms</h1>
                        <p>Best in Class</p>
                        <Button><a href="/">Retrun Home</a></Button>
                    </div>
                </div>
            </div>
{/* 
            <div className="searchcontainer">
                <h1>Search Rooms</h1>
                <div className="searchrow">
                    <div className="searchitems">
                        <Stack spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                options={Rooms.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Room Type" />}
                            />
                        </Stack>
                        <Stack spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                options={Guest.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Guest" />}
                            />
                        </Stack>

                        <Stack>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Breakfast" />

                            </FormGroup>
                        </Stack>
                        <Button variant="contained">Search</Button>
                    </div>
                    <div className="searchitem2">
                        <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="MM/DD/YYYY"
                                    value={value}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                </Stack>
                                </LocalizationProvider>
                    </div>
                    </div>
                </div>
            </div> */}
<div className="roomcon">
    <h1>Rooms</h1>
    <div className="roomlist">
      <div className="roomitem">
        <img
          src="../Assets/room-8.jpeg"
          alt="dd"
          className="rimg"
        />
        <div className="rtitles">
          <h1>Double Deluxe</h1>
          <h2>20 Rooms</h2>
        </div>
      </div>
      <div className="roomitem">
        <img
          src="../Assets/room-12.jpeg"
          alt=""
          className="rimg"
        />
        <div className="rtitles">
          <h1>Family Deluxe</h1>
          <h2>10 Rooms</h2>
        </div>
      </div>
      <div className="roomitem">
        <img
          src="../Assets/room-11.jpeg"
          alt=""
          className="rimg"
        />
        <div className="rtitles">
          <h1>Premium </h1>
          <h2>10 Rooms</h2>
        </div>
      </div>
      <div className="roomitem">
        <img
          src="../Assets/room-10.jpeg"
          alt=""
          className="rimg"
        />
        <div className="rtitles">
          <h1>Single</h1>
          <h2>20 Rooms</h2>
        </div>
      </div>
      <div className="roomitem">
        <img
          src="../Assets/room-9.jpeg"
          alt=""
          className="rimg"
        />
        <div className="rtitles">
          <h1>Luxury</h1>
          <h2>5 Rooms</h2>
        </div>
      </div>
    </div>
    </div>
        </>
    )
};

// const Rooms = [
//     { title: 'Double Deluxe' },
//     { title: 'Family Deluxe' },
//     { title: 'Premium Deluxe' },
//     { title: 'Luxury Deluxe' },
// ];
// const Guest = [
//     { title: "1" },
//     { title: "2" },
//     { title: "3" },
//     { title: "4" },
//     { title: "5" },
// ]