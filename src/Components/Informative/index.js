import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const centerStyle = {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

export const Loading = () => {
  return (
    <Box sx={centerStyle}>
      <CircularProgress color="success" />
    </Box>
  );
};
