import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// The function 'cn' takes any number of class values and merges them using clsx and twMerge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs)) // Ensure the spread operator is used correctly with clsx
}
