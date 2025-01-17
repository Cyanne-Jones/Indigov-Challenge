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
    // check if the constituent already exists
    const existingConstituent = constituents.find((c: Constituent) => {
      return c.name === constituent.name 
        && c.email === constituent.email 
        && c.phone === constituent.phone
        && c.state === constituent.state
        && c.city === constituent.city
        && c.party === constituent.party
        && c.representative_id === constituent.representative_id;
    });

    if(existingConstituent) {
      console.log('Constituent already exists');
      return {
        ...existingConstituent,
        error: 'Constituent already exists',
      };
    }

    // if the constituent doesn't exist, add it
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);

    const newConstituent = {
      ...constituent,
      id: constituents.length + 1,
      date_joined: formattedDate,
    };

    constituents.push(newConstituent);
    console.log('Constituent added', newConstituent);
    return newConstituent;
  } catch (error) {
    console.error(error);
    return null;
  }
}