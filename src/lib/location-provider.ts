import { updateCurrentLocation } from '../store/current-location/action';
import { handleRequest } from '../utils/handle-request';
import { LocationDto } from '../interfaces/dto/location-dto';
import store from '../store/store';
import { PlacesResponse } from '../interfaces/dto/places-response';
import { mapToLocationInterface } from '../utils/search-mapper';
import { Location } from '../interfaces/location';

const LocationProvider = () => {
  const GEO_DB_CITIES_KEY = process.env.REACT_APP_GEO_DB_CITIES || '';
  const API_KEY = process.env.REACT_APP_SPOTT_API || '';

  const getLocationByCoords = async (lat: number, lon: number): Promise<void> => {
    return await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=${lat}${lon}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': GEO_DB_CITIES_KEY,
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
      .then((res) => handleRequest(res))
      .then((location: LocationDto) => {
        if (!!location && location.data.length !== 0) {
          const coords: Location = {
            city: location.data[0].name,
            country: location.data[0].country,
            lat: 0,
            lon: 0,
          };
          store.dispatch(updateCurrentLocation(coords));
        }
        console.error('There is no available data');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchForPlaces = async (query: string): Promise<Location[]> => {
    return await fetch(`https://spott.p.rapidapi.com/places/autocomplete?q=${query}&type=CITY`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'spott.p.rapidapi.com',
      },
    })
      .then((res) => handleRequest(res))
      .then((places: PlacesResponse[]) => {
        return mapToLocationInterface(places);
      });
  };

  return {
    getLocationByCoords,
    searchForPlaces,
  };
};

export default LocationProvider;
