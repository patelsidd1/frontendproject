import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
        },
      },
    },
  },
});

const RoundedButtonStyled = styled(Button)({
  borderRadius: '50px',
  textTransform: 'none',
});

interface RoundedButtonProps extends ButtonProps {
  // Add any additional props you need
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ children, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <RoundedButtonStyled {...rest}>
        {children}
      </RoundedButtonStyled>
    </ThemeProvider>
  );
};

export default RoundedButton;
