import { ShoppingCart, UserIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "../ModeToggle";

export default function Header() {
  return (
    <header className="flex  items-center justify-between border-b py-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.svg" alt={APP_NAME} width={40} height={40} />
        <span className="hidden text-lg capitalize lg:block">{APP_NAME}</span>
      </Link>

      <div className="flex items-center gap-3">
        <ModeToggle />

        {/* LEARN: asChild prop */}
        <Button asChild variant="ghost">
          <Link href="/cart" className="flex items-center gap-1">
            <ShoppingCart />{" "}
            <span className="text-md hidden sm:block">Cart</span>
          </Link>
        </Button>

        <Button asChild variant="default">
          <Link href="/login" className="flex items-center gap-1">
            <UserIcon /> <span className="text-md hidden sm:block">Login</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
