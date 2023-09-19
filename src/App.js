import React, { useState } from "react";
import Forms from "./components/Forms";

function App() {

  function handleSubmitSuccess() {
    alert('Formulario enviado con éxito. Realizar acciones adicionales aquí.');
    // Realiza las acciones adicionales que desees en el componente principal
  }

  return (
    <Forms onSubmitSuccess={handleSubmitSuccess} />
  );
}

export default App;