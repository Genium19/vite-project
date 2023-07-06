import React, { useEffect, useState } from "react";
import "./styles.css";
import { blue } from "material-ui-colors";
import color from "material-ui-colors/dist/amber";

const url = "https://binance43.p.rapidapi.com/avgPrice?symbol=BTCUSDT";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1bd0e77788msh8644b8c60691601p19f0f7jsna265e5b3cedb",
    "X-RapidAPI-Host": "binance43.p.rapidapi.com",
  },
};

const urlEth = "https://binance43.p.rapidapi.com/avgPrice?symbol=ETHUSDT";
const optionsEth = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1bd0e77788msh8644b8c60691601p19f0f7jsna265e5b3cedb",
    "X-RapidAPI-Host": "binance43.p.rapidapi.com",
  },
};

const VinonceHome = () => {
  const [price, setPrice] = useState("");
  const [priceEth, setPriceEth] = useState("");

  useEffect(() => {
    fetchData(url, options)
      .then((result) => {
        let parsedResponse = JSON.parse(result);
        let price = parsedResponse.price;
        setPrice(price);
      })
      .catch((error) => {
        console.error(error);
      });

    fetchData(urlEth, optionsEth)
      .then((resultEth) => {
        let parsedResponseEth = JSON.parse(resultEth);
        let priceEth = parsedResponseEth.price;
        setPriceEth(priceEth);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function fetchData(url, options) {
    return fetch(url, options)
      .then((response) => response.text())
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }

  function agregarPrecio() {
    var div = document.getElementById("precios");
    var btcusdt = document.createElement("div");
    btcusdt.textContent = "Bitcoin " + price;
    div.appendChild(btcusdt);
    var ethusdt = document.createElement("div");
    ethusdt.textContent = "Ethereum " + priceEth;
    div.appendChild(ethusdt);
  }

  return (
    <div align="center">
      <header>
        <h1>VINONCE 💰🍷</h1>
      </header>

      <main>
        <h2 className="text-grey-800 font-bold text-lg">Consulta el Precio de tus Criptomonedas</h2>

        <div id="precios" className="grid grid-cols-2 pr-60 pl-60 p-4 gap-6 bg-blue-200"></div>

        <button
          onClick={agregarPrecio}
          className="m-5 w-40 bg-blue-500 py-2 px-4 rounded-lg text-white text-base hover:bg-blue-600 hover:translate-y-0.5 transition-all duration-300 ease-in-out"
        >
          Ver Precio
        </button>
      </main>

      <footer>
        <p>By Genium</p>
      </footer>
    </div>
  );
};

export default VinonceHome;
