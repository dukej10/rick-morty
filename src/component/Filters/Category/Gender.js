import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  RadioGroup,
  FormControl,
} from "@mui/material";
import FilterBTN from "../FilterBTN";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Gender = ({ setPageNumber, setGender }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  const [value, setValue] = useState("");

  const handleColorChange = (event) => {
    // Obtener el valor del botón de radio que se seleccionó
    const selectedValue = event.target.value;
    // Establecer el valor de la variable `value` al valor del botón de radio que se seleccionó
    setValue(selectedValue);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Gender</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset">
          <RadioGroup
            name="color"
            value={value}
            onChange={handleColorChange}
            display={"flex"}
            sx={{ flexDirection: "row" }}
          >
            {genders.map((item, index) => (
              <FilterBTN
                task={setGender}
                setPageNumber={setPageNumber}
                key={index}
                index={index}
                name="gender"
                item={item}
                setValue={setValue}
                value={value}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default Gender;
