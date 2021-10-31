import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const foodiesAuthentication = (app) => {

    initializeApp(firebaseConfig);
}

export default foodiesAuthentication;