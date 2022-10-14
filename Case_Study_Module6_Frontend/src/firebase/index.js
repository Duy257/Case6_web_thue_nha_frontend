// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
let  firebaseConfig = {
    apiKey: "AIzaSyDaXLwkCeq5brVtuEY9DYtd0UBdHJyegvs",
    authDomain: "images-c1654.firebaseapp.com",
    projectId: "images-c1654",
    storageBucket: "images-c1654.appspot.com",
    messagingSenderId: "604566200010",
    appId: "1:604566200010:web:0cf1f65c6a95e235905e33",
    measurementId: "G-EY2YHY06B6",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage, app };