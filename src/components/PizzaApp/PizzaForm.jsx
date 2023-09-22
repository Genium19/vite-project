import React, { useState } from "react";

function PizzaForm() {
  const [nombre, setNombre] = useState("");
  const [tamano, setTamano] = useState("pequena");
  const [toppings, setToppings] = useState([]);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleTamanoChange = (e) => {
    setTamano(e.target.value);
  };

  const handleToppingsChange = (e) => {
    const selectedToppings = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setToppings(selectedToppings);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const pedido = {
      nombre,
      tamano,
      toppings,
    };

    // Mostrar los datos del pedido en la consola antes de enviarlos al servidor
    console.log("Pedido:", pedido);

    try {
      const response = await fetch("http://localhost:3000/vite-project/pedido", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicar que se envía JSON en el cuerpo de la solicitud
        },
        body: JSON.stringify(pedido), // Convertir el objeto a JSON y enviarlo
      });
      

      if (response.ok) {
        // Aquí puedes manejar la respuesta del servidor si es necesario
        console.log("Pedido enviado con éxito");
      } else {
        console.error("Error al enviar el pedido");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">
          Formulario de Pedido de Pizza
        </h1>
        <form
          action="http://localhost:3000/vite-project/pedido"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-600">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleNombreChange}
              required
              className="border rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tamano" className="block text-gray-600">
              Tamaño de la Pizza:
            </label>
            <select
              id="tamano"
              name="tamano"
              value={tamano}
              onChange={handleTamanoChange}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="pequena">Pequeña</option>
              <option value="mediana">Mediana</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="toppings" className="block text-gray-600">
              Toppings (selecciona uno o varios):
            </label>
            <select
              id="toppings"
              name="toppings"
              multiple
              value={toppings}
              onChange={handleToppingsChange}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="pepperoni">Pepperoni</option>
              <option value="hongos">Hongos</option>
              <option value="jamon">Jamón</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Enviar Pedido
          </button>
        </form>
      </div>
    </div>
  );
}

export default PizzaForm;
