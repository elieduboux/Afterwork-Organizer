import React from 'react';
import { Select, MenuItem, FormHelperText } from "@mui/material";
import { useState } from "react";
 
function Preferences() {
  const [value, setValue] = useState("Escape Game");
 
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="App">
      <Select 
        label={value ? "preferences" : ""}
        value={value}
        onChange={handleChange}
        sx={{
          width: 250,
          height: 50,
        }}
      ><FormHelperText>Select a preference</FormHelperText>
        <MenuItem value={1}>Escape Game</MenuItem>
        <MenuItem value={2}>Video Game Competition</MenuItem>
        <MenuItem value={3}>Bar</MenuItem>
        <MenuItem value={4}>Watching Football on TV</MenuItem>
        <MenuItem value={5}>Pizzeria</MenuItem>
        <MenuItem value={6}>Sports</MenuItem>
        <MenuItem value={7}>Diver</MenuItem>
        <MenuItem value={8}>Climbing</MenuItem>
        <MenuItem value={9}>Other</MenuItem>
      </Select>
    </div>
  );
}
 
export default Preferences;