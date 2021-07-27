
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import rootsaga from './src/sagas';
import rootReducer from './src/reducers'
import Router from './src/routers/router';
import {theme} from './src/utils/them'

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootsaga)


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <PaperProvider theme={theme}>
        <Router />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
