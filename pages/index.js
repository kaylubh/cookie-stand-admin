// next.js
import Head from "next/head";
// components
import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Report from "@/components/report";


export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />

      <main>

        <Form />

        <Report />

      </main>

      <Footer />
    </>
  );
}
