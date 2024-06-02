// src/components/Tabere.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/tabere.css";
import { db, collection, addDoc, serverTimestamp } from "../config/firebase";

function Tabere() {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    telefon: "",
    varsta: "",
    email: "",
    initialaTatalui: "",
    clasa: "",
    judetul: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "inscrieri"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      alert("Datele au fost trimise cu succes!");
    } catch (error) {
      console.error("Eroare la trimiterea datelor: ", error);
      alert("A apărut o eroare la trimiterea datelor.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="tabere container">
        <div className="tabere-content">
          <div className="tabere-left">
            <h1 className="section-title">Tabere De Copii</h1>
            <div className="tabere-img">
              <img
                className="tabere-img-item"
                src="src/assets/tabere-1.jpg"
                alt="Tabere 1"
              />
              <img
                className="tabere-img-item tabere-img-item-right"
                src="src/assets/tabere-2.jpg"
                alt="Tabere 2"
              />
            </div>
            <p className="tabere-text">
              Bine ați venit la taberele noastre de vară pentru copii! Aici,
              copiii vor avea oportunitatea de a învăța lucruri noi, de a-și
              face prieteni și de a se bucura de activități în aer liber.
            </p>
          </div>
          <div className="tabere-right">
            <h2>Formular inscriere</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="nume"
                  placeholder="Nume"
                  className="input"
                  value={formData.nume}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="prenume"
                  placeholder="Prenume"
                  className="input"
                  value={formData.prenume}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="telefon"
                  placeholder="Telefon"
                  className="input"
                  value={formData.telefon}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="varsta"
                  placeholder="Varsta"
                  className="input"
                  value={formData.varsta}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="initialaTatalui"
                  placeholder="Initiala Tatalui"
                  className="input"
                  value={formData.initialaTatalui}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="clasa"
                  placeholder="Clasa"
                  className="input"
                  value={formData.clasa}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="judetul"
                  placeholder="Judetul"
                  className="input"
                  value={formData.judetul}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabere;
