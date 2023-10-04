import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="auth">
      <p>Sign in with Google</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export { Auth };
