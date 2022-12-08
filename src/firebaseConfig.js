import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseCon = {
  apiKey: "AIzaSyDdC_gm1i39WAg_zQ6b0BZ6N2VOj2FclrM",
  authDomain: "b2b-e-commerce-25964.firebaseapp.com",
  projectId: "b2b-e-commerce-25964",
  storageBucket: "b2b-e-commerce-25964.appspot.com",
  messagingSenderId: "196547825657",
  appId: "1:196547825657:web:750e6e023a36790533b728",
  measurementId: "G-4QM4L1DW7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseCon);
const firebaseConfig = getAnalytics(app);

export default firebaseConfig;
