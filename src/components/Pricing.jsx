import TickIcon from "../icons/TickIcon";
import Button from "./ui/Button";

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: 29,
      duration: "month",
      description: "Best option for personal use & for your next project.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
      cta: "Get started",
    },
    {
      id: 2,
      name: "Company",
      price: 99,
      duration: "month",
      description: "Relevant for multiple users, extended & premium support.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
      cta: "Get started",
    },
    {
      id: 3,
      name: "Enterprise",
      price: 499,
      duration: "month",
      description:
        "Best for large scale uses and extended redistribution rights.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
      cta: "Get started",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-24">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {pricingPlans.map((p) => (
            <div
              className={`${p.name === "Company" ? "border-pink-500 dark:border-pink-500" : "border-gray-500 dark:border-gray-500"} mx-auto flex max-w-lg flex-col rounded-lg border bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:bg-gray-800 dark:text-white`}
            >
              <h3 className="mb-4 text-2xl font-semibold">{p.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {p.description}
              </p>
              <div className="my-8 flex items-baseline justify-center">
                <span className="mr-2 text-5xl font-extrabold">${p.price}</span>
                <span className="text-gray-500 dark:text-gray-400">
                  /{p.duration}
                </span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                {p.features.map((f) => (
                  <li className="flex items-center space-x-3">
                    <TickIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button>{p.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
