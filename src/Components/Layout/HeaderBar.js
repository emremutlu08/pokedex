import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Link from './../../Link';
import { useRouter } from 'next/router';
import { Loading } from '../Informative';

export default function HeaderBar() {
  const router = useRouter();
  if (!router.isReady) return <Loading />;
  const query = router.query;
  const notHomepage = Object.keys(query).length !== 0;
  console.log(query, notHomepage, ':18');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {notHomepage ? (
            <Link href="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            <Link href="/"> Pokedex </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
