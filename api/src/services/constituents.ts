import { constituents } from "../data/constituent";
import { Constituent } from "../data/typeDefs";

export const getAllConstituents = (representativeId: number) => {
  try {
    if (representativeId) {
      const repConstituents = constituents.find((constituent: Constituent ) => constituent.representative_id === representativeId);
      return repConstituents
    }
    throw new Error('No representative ID passed in');
  } catch (error) {
    console.error(error);
    return [];
  }
}