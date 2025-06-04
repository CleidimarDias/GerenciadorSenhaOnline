"use client";

import { useUser } from "./contexts/AuthContext";

//import { useUser } from "./contexts/AuthContext";

export default function Home() {
  const { isAuthenticated } = useUser();

  console.log(isAuthenticated);
  // if (isAuthenticated) {
  return <div className="h-dvh">PÁGINA HOME</div>;
  // } else {
  //   redirect("/bla/login");
  // }
}
