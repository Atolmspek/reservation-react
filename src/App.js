import React, { useState } from "react";
import Forms from "./components/Forms";


function App() {

  //localStorage.clear();

   
    const initialReservations = JSON.parse(localStorage.getItem("reservationData")) || [];
    const [reservations, setReservations] = useState(initialReservations);

    
    function handleSubmitSuccess(date, timeSlot, name, surname) {
      
      
      let storedData = localStorage.getItem("reservationData");
      let parsedData = [];
    
      if (storedData) {
        parsedData = JSON.parse(storedData);
        console.log("Stored Data:", parsedData);
        console.log("Form Data:", { date, timeSlot, name, surname });
    
        // It's crucial o format Date because otherwise what is sent through the form and what is restored through localStorage has a different formatting
        //making the isDuplicate method return false.
        //This seems to happen with this Chakra Datepicker as I had no such trouble with the Bootstrap one from the previous exercise.
        const formattedDate = date.toLocaleDateString();
    
        const isDuplicate = parsedData.some(function (reservation) {
          return (
            reservation.date === formattedDate &&
            reservation.timeSlot === timeSlot &&
            reservation.name === name &&
            reservation.surname === surname
          );
        });
    
        if (isDuplicate) {
          alert("Reservation already made with that name and time");
          return;
        }
      }
    
      const formattedDate = date.toLocaleDateString();
      const newReservation = {
        date: formattedDate,
        timeSlot,
        name,
        surname,
      };
    
      const updatedReservations = [...parsedData, newReservation];
    
      localStorage.setItem("reservationData", JSON.stringify(updatedReservations));
    
      setReservations(updatedReservations);
    }

  return (
    <Forms
      onSubmitSuccess={handleSubmitSuccess}
     
    />
  );
  }

export default App;