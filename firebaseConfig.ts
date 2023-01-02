// @ts-nocheck

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { typeDefs } from "./pages/api/typeDefs";

import {
    GoogleAuthProvider,
    GithubAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { Admin } from "mongodb";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// ! I will make a new app with a different config once I'm done development
const firebaseConfig = {
    apiKey: "AIzaSyAiuGemHroS2pmD968wGL0zz059iBoHmCQ",
    authDomain: "cram-tracker.firebaseapp.com",
    projectId: "cram-tracker",
    storageBucket: "cram-tracker.appspot.com",
    messagingSenderId: "620732998122",
    appId: "1:620732998122:web:fc08e249b6ccfebffdd293",
    measurementId: "G-CPBG3TMV6D",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

// getting all users

// const getAllUsers = () => {
//     getAuth
//         .getUsers()
//         .then((getUsersResult) => {
//             console.log("Successfully fetched user data:");
//             getUsersResult.users.forEach((userRecord) => {
//                 console.log(userRecord);
//             });

//             console.log(
//                 "Unable to find users corresponding to these identifiers:"
//             );
//             getUsersResult.notFound.forEach((userIdentifier) => {
//                 console.log(userIdentifier);
//             });
//         })
//         .catch((error) => {
//             console.log("Error fetching user data:", error);
//         });
// }

// const getAllUsers = (req, res) => {
//     const maxResults = 1; // optional arg.

//     auth.listUsers(maxResults)
//         .then((userRecords) => {
//             userRecords.users.forEach((user) => console.log(user.toJSON()));
//             res.end("Retrieved users list successfully.");
//         })
//         .catch((error) => console.log(error));
// };

// const functions = firebase.functions();

// making a user an admin

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;

        // setLoading(true);

        // let res =
        await fetch("/api/userHandler", {
            method: "POST",
            body: JSON.stringify({
                uid: user.id,
                name: user.displayName,
                email: user.email,
                authProvider: "google",
                superuser: false,
            }),
        });

        // createTestUser(user.displayName);

        // if (res.ok) {
        //     res = await res.json();
        // }

        // setLoading(false);

        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                authProvider: "google",
                superuser: false,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const githubProvider = new GithubAuthProvider();
const signInWithGithub = async () => {
    try {
        const res = await signInWithPopup(auth, githubProvider);

        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = res.user;

        await fetch("/api/userHandler", {
            method: "POST",
            body: JSON.stringify({
                uid: user.id,
                name: user.displayName,
                email: user.email,
                authProvider: "github",
                superuser: false,
            }),
        });

        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                authProvider: "github",
                superuser: false,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            email,
            authProvider: "local",
            superuser: false,
        });

        console.log(user.uid, name, email);

        await fetch("/api/userHandler", {
            method: "POST",
            body: JSON.stringify({
                uid: user.uid,
                name: name,
                email: email,
                authProvider: "local",
                superuser: false,
            }),
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
        console.log("user logged out");
    } catch (error) {
        console.log(error.message);
    }
};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithGithub,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    sendPasswordResetEmail,
};
