// next.js
import Head from "next/head";
// react
import { useState } from "react";
// components
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieStandAdmin from "@/components/cookie-stand-admin";

export default function Home() {
  const [standCount, setStandCount] = useState(0);

  return (
    <div className="h-screen bg-emerald-50">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main className="flex flex-col gap-4 my-6">
        <CookieStandAdmin updateStandCount={setStandCount} />
      </main>

      <Footer cookieStandsCount={standCount} />
    </div>
  );
}
