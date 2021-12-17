// eslint-disable-next-line no-unused-vars
import { app } from "../firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default function register_login(id, email, password, toast, navigate) {
  const authentication = getAuth();
  if (id === 1) {
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate('/home');
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
        }
      });
  }
  if (id === 2) {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate('/home');
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
        }
        if (error.code === "auth/invalid-email") {
            toast.error("Invalid Email");
        }
      });
  }
}
