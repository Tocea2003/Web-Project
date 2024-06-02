import React, { useState, useEffect } from "react";
import "firebase/firestore";
import "../styles/PopupCalendar.css";

// Remove the unused import statement for the db object
//import { db } from "../config/firebase";

const PopupCalendar = ({ onClose }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  useEffect(() => {
    // Fetch available slots from Firebase
    const fetchAvailableSlots = async () => {
      const db = firebase.firestore();
      const slotsRef = db.collection("availableSlots");
      const snapshot = await slotsRef.get();
      const slots = snapshot.docs.map((doc) => doc.data());
      setAvailableSlots(slots);
    };
    fetchAvailableSlots();
  }, []);

  const handleBooking = (day, time) => {
    // Update Firebase database to reflect the booking
    const db = firebase.firestore();
    const bookingRef = db.collection("bookings").doc(`${day}-${time}`);

    bookingRef
      .set({
        day,
        time,
        booked: true,
      })
      .then(() => {
        console.log("Booking successful!");
      })
      .catch((error) => {
        console.error("Error booking slot:", error);
      });
    console.log("Booking:", day, time);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>Choose a day and time:</h2>
        <div className="calendar">
          {availableSlots.map((slot) => (
            <div key={slot.id}>
              <h3>{slot.day}</h3>
              <ul>
                {slot.times.map((time) => (
                  <li key={time} onClick={() => handleBooking(slot.day, time)}>
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupCalendar;
