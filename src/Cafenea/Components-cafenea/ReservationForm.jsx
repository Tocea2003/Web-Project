// src/components/ReservationForm.jsx
import React, { useState } from "react";
import "./ReservationForm.css";

import { db, collection, addDoc, serverTimestamp } from "../../config/firebase";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Coffee-reservations"), {
        name,
        email,
        date,
        createdAt: serverTimestamp(),
      });
      alert("Reservation made successfully");
      setName("");
      setEmail("");
      setDate("");
    } catch (error) {
      console.error("Error adding reservation: ", error);
      alert("Error adding reservation");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation reservation__form">
      <div>
        <label htmlFor="name" className="reservation-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form__input"
        />
      </div>
      <div>
        <label htmlFor="email" className="reservation-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form__input"
        />
      </div>
      <div>
        <label htmlFor="date" className="reservation-label">
          Data :
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="form__input"
        />
      </div>
      <button type="submit" className="reservation__btn">
        Make Reservation
      </button>
    </form>
  );
};

export default ReservationForm;
