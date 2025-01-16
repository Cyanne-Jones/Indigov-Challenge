import { constituents } from "../data/constituent";
import { Constituent } from "../data/typeDefs";

export const getAllConstituents = (representativeId: string) => {
  try {
    if (representativeId) {
      const repConstituents = constituents.filter((constituent: Constituent ) => constituent.representative_id === parseInt(representativeId));
      return repConstituents
    }
    throw new Error('No representative ID passed in');
  } catch (error) {
    console.error(error);
    return [];
  }
}