import { PlacesResponse } from '../interfaces/dto/places-response';
import { Location } from '../interfaces/location';

/**
 * Map response from API to custom Location Interface
 * Current use case is for Spott API
 * @param data PlacesResponse object received by the API used
 * @returns custom Weather object used through out the application
 */
export const mapToLocationInterface = (data: PlacesResponse[]): Location[] => {
  const mapped: Location[] = [];
  if (!!data) {
    data.map((entry: PlacesResponse) => {
      mapped.push({
        city: entry.name,
        country: entry.country.name,
        lat: entry.coordinates.latitude,
        lon: entry.coordinates.longitude,
      });
    });
  }

  return mapped;
};
