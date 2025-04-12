import Footer from "@/components/Footer";
import Header from "@/components/shared/Header";
import React from "react";

export default function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col p-4 mx-auto sm:container md:p-0">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
