import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const currentYear = new Date().getFullYear();

export const nextYear = Number(
  (currentYear + 1).toString().split("").slice(2).join("")
);
