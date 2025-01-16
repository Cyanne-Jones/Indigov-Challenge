import { Representative, representatives } from "../data/representative";

// Add authentication on sign in, and return correct representative
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