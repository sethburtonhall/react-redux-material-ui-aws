const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1060,
      xl: 1200,
    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#F5F9FC',
      },
    },
    MuiChip: {
      root: {
        borderRadius: 4,
      },
    },
    MuiContainer: {
      root: {
        borderRadius: 4,
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F5F9FC',
        },
        div: {
          borderRadius: 4,
        },
        img: {
          borderRadius: 4,
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'none',
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '2.25rem',
        fontWeight: 500,
      },
      h2: {
        fontSize: '1.3125rem',
        fontWeight: 500,
        color: '#090942',
      },
      h3: {
        fontSize: '1.125rem',
        fontWeight: 500,
        color: '#090942',
      },
      h4: {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: '1.2rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.05rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '.875rem',
        fontWeight: 400,
      },
      body2: {
        fontSize: '.75rem',
        fontWeight: 400,
      },
      colorTextSecondary: {
        color: '#989FC2',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#E9ECF6',
      },
    },
    // Forms
    MuiInputBase: {
      root: {
        fontSize: '.75rem',
        background: '#FFF',
      },
      input: {
        color: '#808498',
      },
    },
    MuiTextField: {
      root: {
        fontSize: '.75rem',
      },
    },
    MuiFormHelperText: {
      root: {
        fontStyle: 'italic',
      },
    },
  },
  palette: {
    white: '#FFF',
    gray: '#808498',
    gray1: '#989FC2',
    gray2: '#C6CBDF',
    gray3: '#E9ECF6',
    gray4: '#FBFCFE',
    black: '#3D4144',
    blueLight: '#B7E6FD',
    textSecondary: '#989FC2',

    primary: {
      contrastText: '#ffffff',
      light: '#E6EDFA',
      main: '#1050CA',
      dark: '#090942',
      opaque: '#E7EDFA',
    },
    secondary: {
      contrastText: '#ffffff',
      light: '#C9A0FE',
      main: '#00B6FF',
      dark: '#7600FF',
    },
    error: {
      light: '#FD888D',
      main: '#FF6666',
    },
    warning: {
      light: '#FFD680',
      main: '#FFAF43',
    },
    success: {
      light: '#CBF2E6',
      main: '#37D3A1',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
    fontStyle: 'normal',
    fontWeight: 'medium',
    lineSpacing: '40px',
  },
};

export default baseTheme;
