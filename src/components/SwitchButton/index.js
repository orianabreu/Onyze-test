import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IOSSwitch from "./styles";

export default function SwitchButton() {
  const [state, setState] = useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { checked } = state;

  return (
    <FormControlLabel
      control={
        <IOSSwitch checked={checked} onChange={handleChange} name="checked" />
      }
      label=""
    />
  );
}
