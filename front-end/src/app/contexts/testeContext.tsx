"use client";
import { createContext, useContext, useState } from "react";

type testeType = {
  palavra: string;
  MudarPalavra: (x: string) => void;
};

export const testeContext = createContext<testeType | null>(null);

export const TesteProvider = ({ children }: { children: React.ReactNode }) => {
  const [palavra, setPalavra] = useState("palavra inicial");

  const MudarPalavra = (x: string) => {
    setPalavra(x);
  };

  console.log("Provider atualizado: ", palavra);

  return (
    <testeContext.Provider value={{ palavra, MudarPalavra }}>
      {children}
    </testeContext.Provider>
  );
};

export const useUser = (): testeType => {
  const context = useContext(testeContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
