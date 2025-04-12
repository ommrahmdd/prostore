import React from "react";
import loading from "@/../public/images/loading.gif";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Image src={loading} alt="loading" />
    </div>
  );
}
