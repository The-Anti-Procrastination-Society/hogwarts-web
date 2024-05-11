"use client";
import Input from "@/app/ui/input";
import axios from "axios";
import React, { useState, useEffect } from "react";
export default function Hero() {
  const words = ["movie", "character", "book"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [data, setData] = useState({});

  const loadData = async () => {
    let data = {};
    data.books = await axios.get(
      "https://potterapi-fedeperin.vercel.app/es/books"
    );
    data.characters = await axios.get(
      "https://potterapi-fedeperin.vercel.app/es/characters"
    );
    data.houses = await axios.get(
      "https://potterapi-fedeperin.vercel.app/es/houses"
    );
    data.spells = await axios.get(
      "https://potterapi-fedeperin.vercel.app/es/spells"
    );
    console.log(data);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const loadedData = await loadData();
      setData(loadedData); // Actualiza el estado con los datos cargados
    };

    fetchData(); // Llama a la función asíncrona
  }, []); // Dependencias vacías significa que se ejecuta solo una vez

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex justify-center items-center "
    >
      <div className="relative w-[400px] md:w-[700px] lg:w-[900px] flex flex-col gap-4 items-center">
        <img src="/hogwarts-escudo.png" alt="Harry Potter banner" width={300} />
        <h1 className="text-3xl font-extrabold font-sans text-white">
          Hogwarts.cu
        </h1>
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border-solid border-2 bg-secondary h-9 md:h-14 rounded-lg w-72 md:w-[400px] lg:w-[600px] pl-3 text-white"
            />
            <div className="absolute hover:opacity-70 transition-opacity cursor-pointer w-14 right-0 top-0 h-full flex items-center justify-center">
              <img src="/lupa.png" className=" w-5 md:w-8" alt="Lupa" />
            </div>
          </div>
          <div className="mt-2 relative flex justify-between">
            <p className=" text-xs sm:text-sm font-Jockey_One font-medium text-white">
              Search for a
              {words.map((word, index) => (
                <span
                  key={index}
                  style={{ transition: "all .8s" }}
                  className={`search-word  absolute ml-[5px] text-red-300 font-bold ${
                    index === currentWordIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {word}
                </span>
              ))}
            </p>
            <select className="bg-transparent text-xs sm:text-sm text-blue-200">
              <option value="es">Es</option>
              <option value="en">En</option>
              <option value="fr">Fr</option>
              <option value="it">It</option>
              <option value="po">Po</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
