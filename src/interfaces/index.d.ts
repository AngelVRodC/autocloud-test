interface GenericObjectInterface {
  id: number;
  [property: string]: any | null;
};
interface BreweryApiInterface {
  id: number,
  obdb_id: string | null,
  name: string | null,
  brewery_type: string | null,
  street: string | null,
  address_2: string | null,
  address_3: string | null,
  city: string | null,
  state: string | null,
  county_province: string | null,
  postal_code: string | null,
  country: string | null,
  longitude: string | null,
  latitude: string | null,
  phone: string | null,
  website_url: string | null,
  updated_at: string | null,
  created_at: string | null
}
interface BreweryCustomInterface {
  id: number,
  obdbId?: string,
  name?: string,
  breweryType?: string,
  street?: string,
  address2?: string,
  address3?: string,
  city?: string,
  state?: string,
  countyProvince?: string,
  postalCode?: string,
  country?: string,
  longitude?: string,
  latitude?: string,
  phone?: string,
  websiteUrl?: string,
  updatedAt?: string,
  createdAt?: string
}

interface OutputInterface {
  [state: string]: BreweryCustomInterface[];
};