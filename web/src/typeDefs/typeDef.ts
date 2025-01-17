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
