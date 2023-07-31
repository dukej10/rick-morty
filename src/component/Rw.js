import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Rw = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    return (
    <div style={{ width: '50%', margin: '0 auto' }}>
<TableContainer component={Paper}>
      <Table aria-label="Rick and Morty Characters">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '6%' ,  fontWeight: 'bold'}}>Name</TableCell>
            <TableCell style={{ width: '6%' ,  fontWeight: 'bold'}}>Status</TableCell>
            <TableCell style={{ width: '6%' , fontWeight: 'bold' }}>Species</TableCell>
            <TableCell style={{ width: '6%',  fontWeight: 'bold' }}>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map(character => (
            <TableRow key={character.id}>
              <TableCell >{character.name}</TableCell>
              <TableCell >{character.status}</TableCell>
              <TableCell >{character.species}</TableCell>
                  <TableCell >{character.gender}</TableCell>
                  <TableCell>
                <img src={character.image} alt={character.name} style={{ width: 50, height: 50, borderRadius: '50%' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
       </div>
    
  );
};

export default Rw;