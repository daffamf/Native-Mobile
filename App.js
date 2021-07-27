
import React from 'react';
import { createStore,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import  createSagaMiddleware from 'redux-saga'
import rootsaga from './src/sagas';
import rootReducer from './src/reducers'
import Router from './src/routers';

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootsaga)


function App (){
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
}

export default App;
