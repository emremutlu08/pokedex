import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
