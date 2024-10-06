type PlanFeature = {
  name: string;
  included: boolean;
};

export type Plan = {
  title: string;
  description: string;
  price: number;
  stripe_price: string;
  features: PlanFeature[];
  isPopular?: boolean;
};

export const handleCheckout = async (stripe_price: string) => {
  const res = await fetch("/api/checkout", {
    method: "POST",
    body: JSON.stringify({
      stripe_price,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const session = await res.json();
  window.location = session.url;
};

export const plans: Plan[] = [
  {
    title: "Basic",
    description: "Essential features for individuals",
    price: 29,
    stripe_price: "price_1Q5BqZDTtNHAJwwnw4QXqCsV",
    features: [
      { name: "1 user", included: true },
      { name: "Up to 10GB storage", included: true },
      { name: "Basic support", included: true },
      { name: "Advanced analytics", included: false },
    ],
  },
  {
    title: "Pro",
    description: "Advanced features for professionals",
    price: 59,
    stripe_price: "price_1Q5BrADTtNHAJwwnqTNJILyb",
    features: [
      { name: "Up to 5 users", included: true },
      { name: "50GB storage", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    description: "Custom solutions for large teams",
    price: 99,
    stripe_price: "price_1Q5BriDTtNHAJwwn5nWuUYdM",
    features: [
      { name: "Unlimited users", included: true },
      { name: "Unlimited storage", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
];
