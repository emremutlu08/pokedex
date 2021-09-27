import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import { makeStyles } from '@mui/styles';
import { blue, grey } from '@mui/material/colors';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

export default function Footer() {
  // Main Classes
  const useStyles = makeStyles(() => ({
    button: {
      backgroundColor: grey[100],
      // color: grey[800],
      '&:hover': {
        backgroundColor: grey[200],
        color: grey[900],
      },
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" color="inherit">
            <NextLink href="https://project-showroom.vercel.app/">
              <a
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                © {new Date().getFullYear()} Emre MUTLU
              </a>
            </NextLink>
          </Typography>
          <Typography variant="body1" color="inherit">
            <NextLink href="https://project-showroom.vercel.app/">
              <a
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <Button
                  variant="outlined"
                  className={classes.button}
                  endIcon={<ImportantDevicesIcon />}
                >
                  SEE MY OTHER PROJECTS
                </Button>
              </a>
            </NextLink>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
