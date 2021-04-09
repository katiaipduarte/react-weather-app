import { Reducer } from 'redux';
import { CURRENT_LOCATION_INITIAL_STATE, CurrentLocationType, CurrentLocation } from './type';

type CurrentLocationReducer = {
  type: string;
  payload?: any;
};

const currentLocationReducer: Reducer<CurrentLocation> = (
  state: CurrentLocation = CURRENT_LOCATION_INITIAL_STATE,
  action: CurrentLocationReducer,
) => {
  switch (action.type) {
    case CurrentLocationType.UPDATE_GEO_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          lat: action.payload.lat,
          lon: action.payload.lon,
        },
      };
    case CurrentLocationType.UPDATE_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          city: action.payload.city === '' ? state.location.city : action.payload.city,
          country: action.payload.country === '' ? state.location.country : action.payload.country,
        },
      };
    case CurrentLocationType.UPDATE_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return { ...state };
  }
};

export default currentLocationReducer;
