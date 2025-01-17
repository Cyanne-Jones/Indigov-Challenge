import { Representative, RepresentativeRole, Party } from './typeDefs';

export const representatives: Representative[] = [
  {
    name: 'Benjamin Franklin',
    email: 'b.franklin@congress.gov',
    phone: '555-555-5555',
    id: 1,
    date_joined: '2024-01-01',
    role: RepresentativeRole.CONGRESSPERSON,
    party: Party.INDEPENDENT,
    state: 'CA',
    city: 'Los Angeles'
  },
  {
    name: 'Jean Luc Picard',
    email: 'j.picard@wa-congress.gov',
    phone: '666-666-6666',
    id: 2,
    date_joined: '2024-01-01',
    role: RepresentativeRole.STATE_CONGRESSPERSON,
    party: Party.DEMOCRAT,
    state: 'WA',
    city: 'Seattle'
  },
  {
    name: 'Paul Revere',
    email: 'paul.revere@wa-congress.gov',
    phone: '777-777-7777',
    id: 3,
    date_joined: '2024-01-01',
    role: RepresentativeRole.SENATOR,
    party: Party.REPUBLICAN,
    state: 'VA',
    city: 'Richmond'
  },
]