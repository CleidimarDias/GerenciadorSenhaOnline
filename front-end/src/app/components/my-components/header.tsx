"use client";
import { useUser } from "@/app/contexts/testeContext";
import Image from "next/image";

export default function Header() {
  const { palavra } = useUser();

  console.log("PALAVRA MUDADA DA PAGINA HEADER", palavra);
  return (
    <div className="bg-[#1270b7] h-[200px] w-screen flex justify-between items-center p-5 ">
      <Image
        src="/logo-prefeitura.png"
        alt="logo"
        height={200}
        width={355}
        className=" "
      />
      <h3 className="text-white text-3xl font-semibold ">{palavra}</h3>
    </div>
  );
}
