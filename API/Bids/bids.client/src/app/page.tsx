"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [auctions, setAuctions] = useState<{ hello: string | undefined }>();

  const getUsers = async () => {
    const response = await fetch('api/auctions/45', { method: 'get' })
    const resposeJosn = await response.json();

    setAuctions(resposeJosn);
  }
  return (
    <main>
      <button onClick={getUsers}> Get some staff</button>
      <ul> {auctions?.hello}</ul>
    </main>
  );
}
