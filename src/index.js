import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
          <Router>
              <App />
          </Router>
      </Provider>
);
