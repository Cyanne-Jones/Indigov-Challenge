import { constituents } from "../data/constituent";
import { CSVSortBy } from "../data/typeDefs";

export const downloadCSV = async (representativeId: number, sortBy: string = CSVSortBy.DATE_JOINED) => {

  const representativeConstituents = constituents.filter((constituent) => constituent.representative_id === representativeId);

  let sortedConstituents = representativeConstituents.sort ((a, b) => {
    if (sortBy === CSVSortBy.NAME) {
      return a.name.localeCompare(b.name);
    } else if (sortBy === CSVSortBy.EMAIL) {
      return a.email.localeCompare(b.email);
    } else if (sortBy === CSVSortBy.PHONE) {
      return a.phone.localeCompare(b.phone);
    } else if (sortBy === CSVSortBy.DATE_JOINED) {
      return a.date_joined.localeCompare(b.date_joined);
    } else if (sortBy === CSVSortBy.PARTY) {
      return a.party.localeCompare(b.party);
    } else if (sortBy === CSVSortBy.CITY) {
      return a.city.localeCompare(b.city);
    } else if (sortBy === CSVSortBy.STATE) {
      return a.state.localeCompare(b.state);
    } else {
      a.date_joined.localeCompare(b.date_joined);
    }
  });



}