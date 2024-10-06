import { NextResponse } from "next/server";
import { stripe } from "@/lib/utils";

export async function POST(request: Request) {
  const body = await request.json();
  const { stripe_price } = body;

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
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000",
  });

  return NextResponse.json(session);
}
