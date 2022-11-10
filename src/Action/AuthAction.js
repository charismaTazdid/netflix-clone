import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../components/Authentication/firebase.config";

initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = (location, navigate) => async (dispatch) => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const userData = result.user;
            const token = userData.accessToken;
            const user = { name: userData.displayName, email: userData.email, img: userData?.photoURL }
            dispatch({ type: 'AUTH', data: { user, token } });
            const destination = location?.state?.from || '/';
            navigate(destination);
        })
        .catch((error) => {
            // console.log(error)
        })
};

export const registerNewuser = (email, password, fullName, location, navigate) => async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const userData = result.user;
            const token = userData.accessToken;
            const user = { name: fullName, email: userData.email, img: userData?.photoURL }

            updateProfile(auth.currentUser, {
                displayName: fullName,
            })
                .then(() => { })
                .catch((error) => {
                    // console.log(error)
                });
            dispatch({ type: 'AUTH', data: { user, token } });
            const destination = location?.state?.from || '/';
            navigate(destination)
        })
        .catch((error) => {
            // console.log(error.code, error.message)
        })
};

export const loginUser = (email, password, location, navigate) => async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const userData = result.user;
            const token = userData.accessToken;
            const user = { name: userData.displayName, email: userData.email, img: userData?.photoURL }
            dispatch({ type: 'AUTH', data: { user, token } });
            const destination = location?.state?.from || '/';
            navigate(destination)
        })
        .catch((error) => {
            // console.log(error)
        })
};

export const authStateChanged = () => async (dispatch) => {
    onAuthStateChanged(auth, (result) => {
        if (result) {
            const token = result.accessToken;
            const user = { name: result.reloadUserInfo.displayName, email: result.reloadUserInfo.email, img: result.reloadUserInfo?.photoUrl }
            dispatch({ type: 'AUTH', data: { user, token } });
        } else {
            dispatch({ type: 'LOGOUT' })
        }
    });
};
