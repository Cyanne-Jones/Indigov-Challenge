import { Constituent, TableSortBy } from "@/utils/typeDef";

export const getSortedConstituentsForTable = (sortBy: TableSortBy, constituents: Constituent[]) => {

  switch (sortBy) {
    case TableSortBy.ASC_NAME:
      return [...constituents].sort((a, b) => a.name.localeCompare(b.name));
    case TableSortBy.DESC_NAME:
      return [...constituents].sort((a, b) => b.name.localeCompare(a.name));
    case TableSortBy.ASC_EMAIL:
      return [...constituents].sort((a, b) => a.email.localeCompare(b.email));
    case TableSortBy.DESC_EMAIL:
      return [...constituents].sort((a, b) => b.email.localeCompare(a.email));
    case TableSortBy.ASC_PHONE:
      return [...constituents].sort((a, b) => a.phone.localeCompare(b.phone));
    case TableSortBy.DESC_PHONE:
      return [...constituents].sort((a, b) => b.phone.localeCompare(a.phone));
    case TableSortBy.ASC_DATE_JOINED:
      return [...constituents].sort((a, b) => (a.date_joined as string).localeCompare(b.date_joined as string));
    case TableSortBy.DESC_DATE_JOINED:
      return [...constituents].sort((a, b) => (b.date_joined as string).localeCompare(a.date_joined as string));
    case TableSortBy.ASC_PARTY:
      return [...constituents].sort((a, b) => a.party.localeCompare(b.party));
    case TableSortBy.DESC_PARTY:
      return [...constituents].sort((a, b) => b.party.localeCompare(a.party));
    case TableSortBy.ASC_CITY:
      return [...constituents].sort((a, b) => a.city.localeCompare(b.city));
    case TableSortBy.DESC_CITY:
      return [...constituents].sort((a, b) => b.city.localeCompare(a.city));
    case TableSortBy.ASC_STATE:
      return [...constituents].sort((a, b) => a.state.localeCompare(b.state));
    case TableSortBy.DESC_STATE:
      return [...constituents].sort((a, b) => b.state.localeCompare(a.state));
    default:
      return [...constituents];
  }
};