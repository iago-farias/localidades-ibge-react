import React from 'react';
import ReactDOM from 'react-dom';
import {ChakraProvider} from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import theme from './theme';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);