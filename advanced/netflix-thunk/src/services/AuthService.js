// import firebase auth.
import { firebaseAuth } from "../firebase/firebase";

export const login = async ({ email, password }) => {
  try {
    return await firebaseAuth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};
