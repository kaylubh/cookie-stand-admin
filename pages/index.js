// next.js
import Head from "next/head";
// react
import { useState } from "react";
// components
import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Report from "@/components/report";


export default function Home() {

  const [newCookieStand, setNewCookieStand] = useState({})

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="flex flex-col gap-4 my-6">

        <Form onSubmit={setNewCookieStand} />

        <Report newCookieStand={newCookieStand} />

      </main>

      <Footer />
    </>
  );
}
