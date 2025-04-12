"use client";

import React, { useEffect } from "react";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon, SunMoon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const [isMounded, setIsMounted] = React.useState(false);

  const { theme, setTheme } = useTheme();

  const iconType =
    theme === "dark" ? (
      <MoonIcon />
    ) : theme === "system" ? (
      <SunMoon />
    ) : (
      <SunIcon />
    );

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounded) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {iconType}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Apperance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "system"}
          onClick={() => handleThemeChange("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light"}
          onClick={() => handleThemeChange("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark"}
          onClick={() => handleThemeChange("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
