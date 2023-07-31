import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { Clear } from "@mui/icons-material";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
const Filter = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <Grid item xs={3} sm={3}>
      <Typography fontWeight={"bold"} sx={{ mb: 4 }} textAlign={"center"}>
        Filter
      </Typography>
      <Button
        variant="outlined"
        startIcon={<Clear />}
        onClick={() => {
          clear();
        }}
      >
        Clear Filter
      </Button>

      <Box
        justifyContent={"end"}
        display={"flex"}
        flexDirection={"column"}
        alignContent={"end"}
        sx={{ marginLeft: 7 }}
      >
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      </Box>
    </Grid>
  );
};

export default Filter;
