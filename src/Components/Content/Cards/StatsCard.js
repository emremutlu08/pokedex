import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Loading } from '../../Informative';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lightBlue } from '@mui/material/colors';

const StatsCard = (props) => {
  const { data } = props;
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
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
            Pokemon Stats
          </Typography>
          <Typography variant="body2">
            The Pokémon's stats are used in battles.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="body2">
                <Table key={`${data}}${Math.random()}`}>
                  {data.stats.map((s) => {
                    return (
                      <TableRow>
                        <TableCell component="th" scope="row" size="small">
                          <Typography
                            variant="overline"
                            display="block"
                            gutterBottom
                          >
                            {s.stat.name}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{s.base_stat}</TableCell>
                      </TableRow>
                    );
                  })}
                </Table>
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default StatsCard;
