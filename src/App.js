import "./App.css";
import Card from "./component/Cards/Row";
import Filter from "./component/Filters/Filter";
import Pagination from "./component/Pagination/Pagination";
import Search from "./component/Search/Search";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchData, setFetchData] = useState("");
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;
  let { info, results } = fetchData;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center"> Rick & Morty</h1>
      <Container>
        <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>
      </Container>
      <Grid container>
        <Filter setStatus={setStatus} setPageNumber={setPageNumber}></Filter>
        <Grid item sm={9}>
          <Grid container justifyContent={"center"}>
            <Card results={results} />
          </Grid>
        </Grid>
      </Grid>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      ></Pagination>
    </div>
  );
}

export default App;
