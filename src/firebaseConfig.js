import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj2NXBio4tF8k4Fsl_EpRGe-O3mKPmx4Q",
  authDomain: "fluttertest-bcdba.firebaseapp.com",
  databaseURL: "https://fluttertest-bcdba-default-rtdb.firebaseio.com",
  projectId: "fluttertest-bcdba",
  storageBucket: "fluttertest-bcdba.appspot.com",
  messagingSenderId: "603932020218",
  appId: "1:603932020218:web:12fc68bfa33a76c17ea843",
  measurementId: "G-WE5JXD8WSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
