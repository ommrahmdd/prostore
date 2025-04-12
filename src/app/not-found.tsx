"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="px-8 py-6 shadow flex flex-col items-center">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="mb-5"
        />
        <div className="space-y-3">
          <p>Not found page</p>
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
