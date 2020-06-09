import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import counterReducer from './reducers'

// CREATING INITIAL STORE
export default function getStore(initialState: number) {
  const store = createStore(
    counterReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
}