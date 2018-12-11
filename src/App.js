import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// MATERIAL UI COMPONENTS
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
// CUSTOM COMPONENTS
import TodoList from './containers/TodoList';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Route path="/todo-list/:id" component={TodoList} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

export default App;
