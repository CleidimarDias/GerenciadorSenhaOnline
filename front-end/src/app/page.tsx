"use client";

import { useUser } from "./contexts/testeContext";

export default function Home() {
  const { palavra } = useUser();

  console.log("PALAVRA MUDADA DA PÁGINA HOME: ", palavra);

  return (
    <div>
      <h1>{palavra}</h1>
    </div>
  );
}
