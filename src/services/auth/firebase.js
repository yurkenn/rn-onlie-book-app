import auth from '@react-native-firebase/auth';

export const loginFirebase = async values => {
  const {email, password} = values;
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(e);
  }
};

export const registerFirebase = async values => {
  const {email, password} = values;
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(e);
  }
};

export const logoutFirebase = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    console.log(e);
  }
};
