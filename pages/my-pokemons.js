import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from '../src/Components/Content/MyPokemons';

export default function MyPokemons() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Content />
      </Box>
    </Container>
  );
}
