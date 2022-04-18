// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig(){

    const firebaseConfig = {
        apiKey: "AIzaSyAGg15Ag3fgkK-QWI1ehiTxsTCRZpRKIDM",
        authDomain: "sistema-bd9d5.firebaseapp.com",
        projectId: "sistema-bd9d5",
        storageBucket: "sistema-bd9d5.appspot.com",
        messagingSenderId: "577518533298",
        appId: "1:577518533298:web:aad357fb14642d9e6567ab",
        measurementId: "G-G4QRWRHVSF"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}