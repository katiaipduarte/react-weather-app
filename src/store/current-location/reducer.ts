import { Reducer } from 'redux';
import { Location } from '../../interfaces/location';
import { CURRENT_LOCATION_INITIAL_STATE, CurrentLocationType } from './type';

type CurrentLocationReducer = {
  type: string;
  payload?: any;
};

const currentLocationReducer: Reducer<Location> = (
  state: Location = CURRENT_LOCATION_INITIAL_STATE,
  action: CurrentLocationReducer,
) => {
  switch (action.type) {
    case CurrentLocationType.UPDATE_GEO_LOCATION:
      return {
        ...state,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    case CurrentLocationType.UPDATE_LOCATION:
      return {
        ...state,
        city: action.payload.city === '' ? state.city : action.payload.city,
        country: action.payload.country === '' ? state.country : action.payload.country,
      };
    default:
      return { ...state };
  }
};

export default currentLocationReducer;
