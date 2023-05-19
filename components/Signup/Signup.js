import { Client, Account } from "appwrite";

import React from "react";

const Signup = () => {
  const client = new Client();
  const account = new Account(client);

  const googleAuth = (e) => {
    e.preventDefault();
    client
      .setEndpoint("") // Your API Endpoint
      .setProject(""); // Your project ID

    // Go to OAuth provider login page
    account.createOAuth2Session(
      "google",
      "http://localhost:3000/secret",
      "http://localhost:3000/login"
    );
    const promise = account.get();
  };
  return (
    <div className="text-center mt-5">
      <button
        className="px-6 py-2 bg-black text-white rounded-full "
        onClick={googleAuth}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
