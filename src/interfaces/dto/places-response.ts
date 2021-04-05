export type PlacesResponse = {
  id: string;
  geonameId: number;
  type: string;
  name: string;
  population: number;
  elevation: number;
  timezoneId: string;
  geonamesUpdatedAt: string;
  createdAt: string;
  updatedAt: string;
  country: CountryDto;
  adminDivision1: CountryDto;
  adminDivision2: CountryDto;
  score: number;
  coordinates: CoordsDto;
};

type CountryDto = { id: string; geonameId: number; name: string };
type CoordsDto = { latitude: number; longitude: number };
