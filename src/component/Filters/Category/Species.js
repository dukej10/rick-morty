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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Species = ({ setPageNumber, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  const [value, setValue] = React.useState("female");

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
        <Typography>Species</Typography>
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
            {species.map((item, index) => (
              <div>
                <FilterBTN
                  task={setSpecies}
                  setPageNumber={setPageNumber}
                  key={index}
                  index={index}
                  name="species"
                  item={item}
                  setValue={setValue}
                  value={value}
                />
              </div>
            ))}
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default Species;
