import React from "react";
import { Button, FormControlLabel } from "@mui/material";

const FilterBTN = ({
  item,
  name,
  index,
  setValue,
  setStatus,
  setPageNumber,
  value,
}) => {
  const handleColorChange = (event) => {
    // Obtener el valor del botón de radio que se seleccionó
    const selectedValue = event.target.value;
    // Establecer el valor de la variable `value` al valor del botón de radio que se seleccionó
    setValue(selectedValue);
  };

  return (
    <FormControlLabel
      sx={{ mx: 1, mb: 1 }}
      value="red"
      control={
        <Button
          sx={{ mx: 0 }}
          variant={value === item ? "contained" : "outlined"}
          color="primary"
          onClick={(e) => {
            handleColorChange(e);
            setValue(item);
            setPageNumber(1);
            setStatus(item);
          }}
          name={name}
          id={`${name}-${index}`}
        >
          {item}
        </Button>
      }
      label=""
    />
  );
};

export default FilterBTN;
