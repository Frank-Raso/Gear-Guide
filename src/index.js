import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme,ThemeProvider } from '@material-ui/core';
import store from './redux/store';
import App from './components/App/App';
const theme = createTheme({
  palette: {
    primary: { main: "rgb(42, 46, 71)" },
    secondary: { main: "rgb(83, 142, 82)" },
    warn: { main: "rgb(150, 60, 47)" },
  },
});



ReactDOM.render(
  <ThemeProvider theme={theme}><Provider store={store}>
    <App />
  </Provider></ThemeProvider>
,
  document.getElementById('react-root'),
);
