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

export const representatives: Representative[] = [
  {
    name: 'John Doe',
    email: 'j.doe@congress.gov',
    phone: '555-555-5555',
    id: 1,
    dateJoined: '2024-01-01',
    role: RepresentativeRole.CONGRESSPERSON,
    party: Party.DEMOCRAT,
    state: 'CA',
    city: 'Los Angeles'
  },
  {
    name: 'Jane Doe',
    email: 'j.doe@wa-congress.gov',
    phone: '666-666-6666',
    id: 2,
    dateJoined: '2024-01-01',
    role: RepresentativeRole.STATE_CONGRESSPERSON,
    party: Party.DEMOCRAT,
    state: 'WA',
    city: 'Seattle'
  },
  {
    name: 'Tom Smith',
    email: 't.smith@senate.gov',
    phone: '777-777-7777',
    id: 3,
    dateJoined: '2024-01-01',
    role: RepresentativeRole.SENATOR,
    party: Party.REPUBLICAN,
    state: 'VA',
    city: 'Richmond'
  },
]