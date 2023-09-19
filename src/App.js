import React, { useState, useEffect } from "react";
import Forms from "./components/Forms";

function App() {
  //localStorage.clear();

    // Recuperar datos de reservas almacenados en el localStorage al inicio
    const initialReservations = JSON.parse(localStorage.getItem("reservationData")) || [];
    const [reservations, setReservations] = useState(initialReservations);
  
    function areObjectsEqual(objA, objB) {
      const stringA = JSON.stringify(objA);
      const stringB = JSON.stringify(objB);
      return stringA === stringB;
    }
    
    // ...
    
    function handleSubmitSuccess(date, timeSlot, name, surname) {
      const storedData = localStorage.getItem("reservationData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        console.log("Stored Data:", parsedData);
        console.log("Form Data:", { date, timeSlot, name, surname });
    
        // Verificar si la nueva reserva coincide con alguna reserva existente
        const isDuplicate = parsedData.some((reservation) =>
          areObjectsEqual(reservation, { date, timeSlot, name, surname })
        );
    
        if (isDuplicate) {
          alert("Reservation already made with that name and time");
          return;
        }
      }
    
      const newReservation = {
        date,
        timeSlot,
        name,
        surname,
      };
    
      // Agregar la nueva reserva al array de reservas existente
      const updatedReservations = [...parsedData, newReservation];
    
      // Guardar el array actualizado en el localStorage
      localStorage.setItem("reservationData", JSON.stringify(updatedReservations));
    
      // Actualizar el estado con el nuevo array de reservas
      setReservations(updatedReservations);
    }

  return (
    <Forms
      onSubmitSuccess={handleSubmitSuccess}
     
    />
  );
  }

export default App;