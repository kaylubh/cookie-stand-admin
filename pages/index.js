// next.js
import Head from "next/head";
// react
import { useState } from "react";
// authentication
import { useAuth } from "@/contexts/auth";
// components
import Header from "@/components/header";
import Footer from "@/components/footer";
import LoginForm from "@/components/login-form";
import CookieStandAdmin from "@/components/cookie-stand-admin";

export default function Home() {
  const { user, login, logout } = useAuth();
  const [standCount, setStandCount] = useState(0);

  return (
    <div className="h-screen bg-emerald-50">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header user={user} onLogout={logout} />

      <main className="flex flex-col gap-4 my-6">
        {user ? (
          <CookieStandAdmin updateStandCount={setStandCount} />
        ) : (
          <LoginForm onLogin={login} />
        )}
      </main>

      <Footer cookieStandsCount={standCount} />
    </div>
  );
}
