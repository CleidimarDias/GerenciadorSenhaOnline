"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#1270b7] h-80  w-screen flex justify-between items-center p-5 relative ">
      <Image
        src="https://www.anapolis.go.gov.br/wp-content/themes/prefeitura-anapolis/assets/images//monumentos-anapolis.png"
        alt="logo"
        fill
        className="object-contain text-white"
      />
    </div>
  );
}
