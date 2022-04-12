import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup
} from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase.config";

const Login = (props) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const volWorkName = props.volWorkName;
  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // sessionStorage.setItem("accessToken", user.accessToken);
        volWorkName ? navigate(`/form/${volWorkName}`) : navigate("/dashboard");
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        user.getIdToken()
        .then(token => {
          console.log(token);
        })
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <div>
      <button className="bg-slate-300 p-4 " onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
