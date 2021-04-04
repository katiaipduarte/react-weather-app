export type LocationDto = {
  data: Data[];
  links: Link[];
  metadata: Metadata;
};

type Metadata = {
  currentOffset: number;
  totalCount: number;
};

type Link = {
  href: string;
  rel: string;
};

type Data = {
  country: string;
  countryCode: string;
  distance: number;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  region: string;
  regionCode: string;
  wikiDataId: string;
};
