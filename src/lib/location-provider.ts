import { updateCurrentLocation } from '../store/current-location/action';
import { handleRequest } from '../utils/handle-request';
import { Location } from '../interfaces/location';
import { LocationDto } from '../interfaces/dto/location-dto';
import store from '../store/store';

const LocationProvider = () => {
  const API_KEY = process.env.REACT_APP_GEO_DB_CITIES || '';

  const getLocationByCoords = async (lat: number, lon: number): Promise<void> => {
    return await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=${lat}${lon}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      },
    })
      .then((res) => handleRequest(res))
      .then((location: LocationDto) => {
        if (location.data.length !== 0) {
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

  return {
    getLocationByCoords,
  };
};

export default LocationProvider;
