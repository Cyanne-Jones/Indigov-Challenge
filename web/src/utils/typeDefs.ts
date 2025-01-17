// irl would use something like GraphQL and Apollo to ensure types are consistent between the client and server

export enum RepresentativeRole {
  CONGRESSPERSON = "Congressperson",
  SENATOR = "Senator",
  GOVERNOR = "Governor",
  MAYOR = "Mayor",
  STATE_SENATOR = "State Senator",
  STATE_CONGRESSPERSON = "State Congressperson",
};

export enum Party {
  DEMOCRAT = "Democrat",
  REPUBLICAN = "Republican",
  INDEPENDENT = 'Independent',
  GREEN_PARTY = 'Green Party',
  LIBERTARIAN = 'Libertarian',
  OTHER = 'Other',
}

export type Representative = {
  name: string;
  email: string;
  phone: string;
  id: number;
  dateJoined: string;
  role: RepresentativeRole;
  party: Party;
  // Add type safety for state and city if given more time
  state: string;
  city: string;
};

export type Constituent = {
  name: string;
  email: string;
  phone: string;
  id?: number;
  date_joined?: string;
  party: Party;
  state: string;
  city: string;
  representative_id: number;
};

export enum CSVSortBy {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
  DATE_JOINED = 'date_joined',
  PARTY = 'party',
  CITY = 'city',
  STATE = 'state',
};

export enum TableSortBy {
  ASC_NAME = 'ASC_NAME',
  DESC_NAME = 'DESC_NAME',
  ASC_EMAIL = 'ASC_EMAIL',
  DESC_EMAIL = 'DESC_EMAIL',
  ASC_PHONE = 'ASC_PHONE',
  DESC_PHONE = 'DESC_PHONE',
  ASC_PARTY = 'ASC_PARTY',
  DESC_PARTY = 'DESC_PARTY',
  ASC_CITY = 'ASC_CITY',
  DESC_CITY = 'DESC_CITY',
  ASC_STATE = 'ASC_STATE',
  DESC_STATE = 'DESC_STATE',
  ASC_DATE_JOINED = 'ASC_DATE_JOINED',
  DESC_DATE_JOINED = 'DESC_DATE_JOINED',
};
