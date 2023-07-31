import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { colors } from "@mui/material";
import "./Card.css";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const CardC = ({ results }) => {
  const [characters, setCharacters] = useState([]);
  let display;
  if (results) {
    display = results.map((character) => {
      let { id, name, image, status, location, species } = character;
      return (
        <Grid item sm={5} key={id} sx={{ my: 2, mx: 1 }}>
          <Card variant="outlined">
            <Grid container display={"flex"} position={"relative"}>
              <Grid item xs={6} md={6}>
                <img
                  src={image}
                  alt={name}
                  className="card-img img-fluid rounded-start"
                />
                <div
                  className={`position-absolute badge ${
                    status === "Alive"
                      ? "bg-success"
                      : status === "Dead"
                      ? "bg-danger"
                      : "bg-secondary"
                  }`}
                >
                  {status}
                </div>
              </Grid>
              <Grid item xs={6} md={5}>
                <CardContent>
                  <Typography align="left" variant="h5" fontWeight={"bold"}>
                    {name}
                  </Typography>
                  <div className="">
                    <Typography
                      align="left"
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      Specie
                    </Typography>
                    <Typography align="left" color={"black"}>
                      {species}
                    </Typography>
                    <Typography
                      align="left"
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      Last location
                    </Typography>
                    <Typography align="left" color={"black"}>
                      {location.name}
                    </Typography>
                  </div>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      );
    });
  } else {
    display = "No data found";
  }
  return <>{display}</>;
};

export default CardC;
