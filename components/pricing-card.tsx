"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Plan } from "@/lib/plans";
import { createCheckoutSession } from "@/app/actions";

export function PricingCard({ plan }: { plan: Plan }) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Card className={plan.isPopular ? "border-primary" : ""}>
      <CardHeader>
        <CardTitle>{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">
          R${plan.price}
          <span className="text-sm font-normal text-muted-foreground">
            /{"mês"}
          </span>
        </div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check
                className={`size-4 mr-2 ${
                  feature.included ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={
                  feature.included ? "" : "text-muted-foreground line-through"
                }
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={plan.isPopular ? "default" : "outline"}
          onClick={async () => {
            setIsLoading(true);
            const session = await createCheckoutSession(plan.stripe_price);
            window.location = session?.url;
          }}
          disabled={isLoading}
        >
          {!isLoading ? "Get Started" : <Loader className="animate-spin" />}
        </Button>
      </CardFooter>
    </Card>
  );
}
