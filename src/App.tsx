import React, { Suspense } from 'react'
import './App.css';
import Menu from './Components/Utils/MenuBar'
import { Provider } from "react-redux"
import store from "./Store/Store"
import GeoLocation from './Helpers/GeoLocationApi'
import { BrowserRouter, Route } from "react-router-dom"
import { setFavorites } from './Store/actions/FavoritesAction'
import { SnackbarProvider } from 'notistack';
import Notifier from './Components/Utils/Notifier'
import loadable from '@loadable/component'

const Home = loadable(() => import(/* webpackChunkName: "home" */ './Components/Home'));
const Favorites = loadable(() => import(/* webpackChunkName: "favorites" */ './Components/Favorites'));

GeoLocation()

if (localStorage.favorites) {
  store.dispatch(setFavorites(JSON.parse(localStorage.favorites)));
}

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={4}>
        <Notifier />
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Menu />
            <Route
              path="/"
              component={Home}
              exact
            />
            <Route
              path="/favorites"
              component={Favorites}
              exact
            />
          </BrowserRouter>
        </Suspense>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
