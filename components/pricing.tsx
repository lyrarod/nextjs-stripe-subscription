import { plans } from "@/lib/plans";
import { PricingCard } from "./pricing-card";

export function Pricing() {
  return (
    <div className="container flex flex-col justify-center min-h-screen px-4 py-16 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center sm:text-4xl">
        Choose Your Plan
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
