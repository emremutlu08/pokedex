import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import Link from './../../Link';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Loading } from '../Informative';

/* Header Bar */
export default function HeaderBar() {
  const router = useRouter();
  if (!router.isReady) return <Loading />;
  const notHomepage = router.pathname !== '/';
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

          <NextLink href="https://project-showroom.vercel.app/">
            <a
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <HelpIcon />
              </IconButton>
            </a>
          </NextLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
