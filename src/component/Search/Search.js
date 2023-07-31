import { Button, FormControl, TextField, Grid } from "@mui/material";
import React, { useState } from "react";
import "./Search.css";

const Search = ({ setPageNumber, setSearch }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignContent={"center"}
      display={"flex"}
    >
      <Grid item xs={3} sm={3}>
        <TextField
          size="small"
          sx={{ mx: 1, maxWidth: "100%", maxHeight: "10%" }}
          label="Search for Characters"
          onChange={(event) => setSearch(event.target.value)}
          variant="outlined"
          color="primary"
        />
      </Grid>
      <Grid item xs={1} sm={1}>
        <Button
          onClick={() => {
            setPageNumber(1);
          }}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
