import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase.config";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = () => {
    const auth = getAuth(app);
    const volWorkName = sessionStorage.getItem('volWorkName');
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        sessionStorage.setItem('accessToken', user.accessToken);
       volWorkName ?  navigate(`/form/${volWorkName}`) : navigate('/dashboard') ;
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
  return (
    <div>
      this is login page
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
