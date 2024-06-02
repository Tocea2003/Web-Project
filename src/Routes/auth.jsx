import { auth, GoogleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "../styles/auth.css";
import { Link } from "react-router-dom";
export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, GoogleProvider);
    } catch (error) {
      setError(error.message);
    }
  };
  const Logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="all">
      <div className="auth-container">
        <h2 className="auth-title">Welcome to Smart Camps Sibiu</h2>
        <Link to="/">
          <img
            className="logo-auth"
            src="src/assets/Logo-removebg-preview.png"
            alt="Logo"
          />
        </Link>
        <form className="auth-form">
          <label htmlFor="firstName" className="auth-form-label">
            First Name
          </label>
          <input
            id="firstName"
            placeholder="First Name...."
            onChange={(e) => setFirstName(e.target.value)}
            className="auth-form-input"
          />
          <label htmlFor="lastName" className="auth-form-label">
            Last Name
          </label>
          <input
            id="lastName"
            placeholder="Last Name...."
            onChange={(e) => setLastName(e.target.value)}
            className="auth-form-input"
          />
          <label htmlFor="email" className="auth-form-label">
            Email
          </label>
          <input
            id="email"
            placeholder="Email...."
            onChange={(e) => setEmail(e.target.value)}
            className="auth-form-input"
          />
          <label htmlFor="password" className="auth-form-label">
            Password
          </label>
          <input
            id="password"
            placeholder="Password...."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="auth-form-input"
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="button" onClick={signIn} className="auth-form-button">
            Sign In
          </button>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="auth-form-button"
          >
            Sign In With Google
          </button>
          <button type="button" onClick={Logout} className="auth-form-button">
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};
