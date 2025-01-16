import { Representative, representatives } from "../data/representative";

// Add authentication on sign in, and return correct representative
export const getRepresentative = (id?: number): Representative | undefined => {
  try {
    if (id) {
      return representatives.find((rep) => rep.id === id);
    }
  } catch(e) {
    console.error('No representative ID passed in, returning default representative for app demo');
    // Would return error to front end if this were real
    return representatives[0];
  }
};