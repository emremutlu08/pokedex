import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Loading } from './../../Informative';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lightBlue } from '@mui/material/colors';
import length from 'length.js';

const BasicInfoCard = (props) => {
  const { data } = props;

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {' '}
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ backgroundColor: lightBlue[700], color: lightBlue[50] }}
        >
          <Typography variant="body1" sx={{ width: '33%', flexShrink: 0 }}>
            Basic Info
          </Typography>
          <Typography variant="body2">
            The Pokémon's base attributes.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="body2">
                <Table key={`${data}}${Math.random()}`}>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography
                        variant="overline"
                        display="block"
                        gutterBottom
                      >
                        Height
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {length(data.height, 'dm').to('m').value.toFixed(1)}{' '}
                      {length(data.height, 'dm').to('m').unit}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography
                        variant="overline"
                        display="block"
                        gutterBottom
                      >
                        Weight
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {(data.weight / 10).toFixed(1)} kg
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="tr" scope="row">
                      <Typography
                        variant="overline"
                        display="block"
                        gutterBottom
                      >
                        Base Experience
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{data.base_experience}</TableCell>
                  </TableRow>
                </Table>
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BasicInfoCard;
