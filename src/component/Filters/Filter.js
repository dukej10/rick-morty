import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
function Filter({ setStatus, setPageNumber, setGender, setSpecies }) {
  return (
    <Grid item xs={3} sm={3}>
      <Typography fontWeight={"bold"} sx={{ mb: 4 }} textAlign={"center"}>
        Filter
      </Typography>
      <Typography
        sx={{ mb: 2, textDecoration: "underline" }}
        textAlign="center"
        style={{ cursor: "pointer" }}
      >
        Clear Filter
      </Typography>
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
}

export default Filter;
