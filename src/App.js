import React, { Component } from 'react';
// MATERIAL UI COMPONENTS
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CssBaseline />
      </MuiThemeProvider>
    );
  }
}

export default App;
