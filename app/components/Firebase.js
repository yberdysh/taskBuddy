import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAKEtc9lCiCfUEj6h3FFGZq344Hgh6aqnc",
  authDomain: "taskbuddy-8ee26.firebaseapp.com",
  databaseURL: "https://taskbuddy-8ee26.firebaseio.com",
  projectId: "taskbuddy-8ee26",
  storageBucket: "taskbuddy-8ee26.appspot.com"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

async function signup (email, pass) {

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }

}

export async function login(email, pass) {

    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        console.log("Logged In! Current User", firebase.auth().currentUser.email);

        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
    }

}

export default signup
