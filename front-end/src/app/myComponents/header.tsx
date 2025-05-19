import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#1270b7] h-[200px] max-w-screen flex justify-between items-center p-5 ">
      <Image
        src="/logo-prefeitura.png"
        alt="logo"
        height={200}
        width={355}
        className=" "
      />
      <h3 className="text-white text-3xl font-semibold mr-10 ">
        Gerênciador de Senhas
      </h3>
    </div>
  );
}
