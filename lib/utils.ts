import Stripe from "stripe";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const STRIPE_SECRET_KEY = String(process.env.STRIPE_SECRET_KEY);

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export async function delay(timer: number = 500) {
  return await new Promise((resolve) => setTimeout(resolve, timer));
}
