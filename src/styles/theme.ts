import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    sidebarWidth: number;
    sidebarMobileHeight: number;
  }

  interface ThemeOptions {
    sidebarWidth?: number;
    sidebarMobileHeight?: number;
  }
};

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5000ff',
    },
  },
  sidebarWidth: 260,
  sidebarMobileHeight: 90,
})
