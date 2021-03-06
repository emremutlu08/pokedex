import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { lightBlue } from '@mui/material/colors';
import { capitalizer } from '../../utils';

export default function MoveContent(props) {
  const { pokemonData } = props;
  const movesArr = pokemonData.moves;

  // Sort levels
  movesArr.sort((a, b) => {
    let keyA = ('0000' + a.version_group_details[0].level_learned_at).slice(-5),
      keyB = ('0000' + b.version_group_details[0].level_learned_at).slice(-5);
    // Compare the 2 ids
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" size="medium">
          <TableHead>
            <TableRow sx={{ backgroundColor: lightBlue[500] }}>
              <TableCell sx={{ color: lightBlue[50] }}>Move Name</TableCell>
              <TableCell align="right" sx={{ color: lightBlue[50] }}>
                Learning At (Level)
              </TableCell>
              <TableCell align="right" sx={{ color: lightBlue[50] }}>
                Learning Method
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movesArr.map((move, i) => {
              let moveName = capitalizer(move.move.name);
              const moveDetails = move.version_group_details[0];
              let learningMethod = capitalizer(
                moveDetails.move_learn_method.name,
              );
              const isOdd = i % 2 !== 0;

              return (
                <TableRow
                  key={moveName}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    backgroundColor: isOdd && lightBlue[200],
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: isOdd && 'white' }}
                  >
                    {moveName}
                  </TableCell>
                  <TableCell align="right" sx={{ color: isOdd && 'white' }}>
                    {moveDetails.level_learned_at}
                  </TableCell>
                  <TableCell align="right" sx={{ color: isOdd && 'white' }}>
                    {learningMethod}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow sx={{ backgroundColor: lightBlue[50] }}>
              <TableCell>
                <Box sx={{ visibility: 'hidden' }}>x</Box>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
