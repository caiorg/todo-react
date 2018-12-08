import React, {
  Component
} from 'react';
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
        <TodoList/>
      </MuiThemeProvider>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.user
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({}, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
