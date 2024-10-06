"use server";

import { stripe } from "@/lib/utils";

export async function createCheckoutSession(stripe_price: string) {
  const session = await stripe.checkout.sessions.create({
    currency: "brl",
    mode: "subscription",
    payment_method_types: ["card", "boleto"],
    line_items: [
      {
        price: stripe_price,
        quantity: 1,
      },
    ],
    success_url: "https://nextjs-stripe-subscription-three.vercel.app/success",
    cancel_url: "https://nextjs-stripe-subscription-three.vercel.app",
    // success_url: "http://localhost:3000/success",
    // cancel_url: "http://localhost:3000",

    // payment_method_options: {
    //   boleto: {
    //     expires_after_days: 3,
    //   },
    // },
  });

  // console.log(session);
  return JSON.parse(JSON.stringify(session));
}
