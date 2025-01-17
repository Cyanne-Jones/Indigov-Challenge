import e from "cors";
import { constituents } from "../data/constituent";
import { Constituent } from "../data/typeDefs";

export const getAllConstituents = (representativeId: string) => {
  try {
    if (representativeId) {
      console.log('Getting constituents for representative ID:', representativeId);
      const repConstituents = constituents.filter((constituent: Constituent ) => constituent.representative_id === parseInt(representativeId));
      return repConstituents;
    }
    throw new Error('No representative ID passed in');
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createConstituent = (constituent: Constituent) => {
  try {
    // check if the constituent already exists using email to check
    const existingConstituent = constituents.find((c: Constituent) => c.email === constituent.email);

    if(existingConstituent) {
      console.log('Constituent already exists');
      // update the existing constituent
      const index = constituents.findIndex((c: Constituent) => c.email === constituent.email);
      const updatedConstituent = {
        ...existingConstituent,
        ...constituent,
        error: 'Constituent already exists'
      };
      constituents[index] = updatedConstituent;
      console.log('Constituent updated', updatedConstituent);
      return updatedConstituent;
    }

    // if the constituent doesn't exist, add it
    const newConstituent = {
      ...constituent,
      id: constituents.length + 1,
      date_joined: new Date().toISOString(),
    };

    constituents.push(newConstituent);
    console.log('Constituent added', newConstituent);
    return newConstituent;
  } catch (error) {
    console.error(error);
    return null;
  }
}