import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center border-t">
      {currentYear} All rights reserved. <br />
    </footer>
  );
}
