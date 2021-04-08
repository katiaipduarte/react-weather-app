import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import City from './pages/City';
import CurrentLocation from './pages/CurrentLocation';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { initFavouriteLocation } from './store/favourite-locations/action';
import { GlobalState } from './store/store';
import { GlobalStyle } from './styles';

const App = () => {
  const favouritesLocations = useSelector((state: GlobalState) => state.favouriteLocationsState);
  const [cookies] = useCookies([favouritesLocations.cookie_key]);
  const dispatch = useDispatch();

  useEffect(() => {
    const get = cookies[favouritesLocations.cookie_key];
    dispatch(initFavouriteLocation(get));
  }, []);

  return (
    <CookiesProvider>
      <HashRouter>
        <Navbar />

        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/" exact={true} component={Home} />
              <Route path="/current-location" exact={true} component={CurrentLocation} />
              <Route path="/favourites" exact={true} component={Favourites} />
              <Route path="/:city/:country" component={City} />
              <Route component={NotFound} />
            </Switch>
          )}
        />
      </HashRouter>
      <GlobalStyle />
    </CookiesProvider>
  );
};

export default App;
