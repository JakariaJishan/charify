import {
  getAuth,
  GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase.config";

const Login = (props) => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const volWorkName = props.volWorkName;
  const setUserInfo = props.setUserInfo;
  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        fireAuthToken();
        sessionStorage.setItem("accessToken", user.accessToken);
        sessionStorage.setItem("displayName", user.displayName);
        sessionStorage.setItem("email", user.email);
        console.log(volWorkName)
        volWorkName['']=== undefined ?navigate("/dashboard") : navigate(`/form/${volWorkName[0]}`) ;
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
  const fireAuthToken = () => {
    getAuth().currentUser.getIdToken(true).then((idToken) => {
      sessionStorage.setItem("accessToken", idToken);
    })
  }
  return (
    <div>
      <button className="bg-slate-300 p-4 " onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
