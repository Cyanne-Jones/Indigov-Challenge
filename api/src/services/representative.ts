import { representatives } from "../data/representative";
import { Representative } from "../data/typeDefs";

export const getRepresentative = (id?: string): Representative | string => {
  try {
    if (id) {
      const representative = representatives.find((rep) => rep.id === parseInt(id));
      return representative
    } 
    throw new Error('No representative ID passed in');
  } catch(e) {
    console.error(e);
    return 'No representative ID passed in';
  }
};