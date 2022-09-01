import React from "react";
import { auth } from "../../services/firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const handleSignInWithGoogle = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='text-white h-screen pt-36'>
      <h2 className='text-center text-4xl'>IN-PROGRESS FEATURE</h2>
      <button onClick={handleSignInWithGoogle} className='btn btn-primary'>
        Sign in with google
      </button>
    </div>
  );
};

export default SignIn;
