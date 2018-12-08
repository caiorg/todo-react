import React, { Component } from 'react';
// MATERIAL UI COMPONENTS
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <p>TESTE</p>
      </MuiThemeProvider>
    );
  }
}

export default App;
