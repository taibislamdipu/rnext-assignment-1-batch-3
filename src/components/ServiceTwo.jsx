/* eslint-disable no-unused-vars */
import CartIcon from "../icons/CartIcon";
import CountriesIcon from "../icons/CountriesIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import ServerIcon from "../icons/ServerIcon";
import UsersIcon from "../icons/UsersIcon";

export default function ServiceTwo() {
  const serviceTwoContent = {
    title1: "Trusted Worldwide",
    title2: "Trusted by over 600 million users and 10,000 teams",
    title3:
      "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.",
    title4: "Explore Legality Guide",
    title5: "Visit the Trust Center",
  };

  const serviceStats = [
    {
      id: 1,
      icon: ServerIcon,
      title: "99.99% uptime",
      description: "For Landwind, with zero maintenance downtime",
    },
    {
      id: 2,
      icon: UsersIcon,
      title: "600M+ Users",
      description: "Trusted by over 600 million users around the world",
    },
    {
      id: 3,
      icon: CountriesIcon,
      title: "100+ countries",
      description: "Have used Landwind to create functional websites",
    },
    {
      id: 4,
      icon: CartIcon,
      title: "5+ Million",
      description: "Transactions per day",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center px-4 py-8 lg:grid lg:grid-cols-4 lg:gap-16 lg:px-6 lg:py-24 xl:gap-24">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
            {serviceTwoContent.title1}
          </p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            {serviceTwoContent.title2}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {serviceTwoContent.title3}
          </p>
          <div className="mt-6 space-y-4 border-t border-gray-200 pt-6 dark:border-gray-700">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                {serviceTwoContent.title4}
                <RightArrowIcon />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                {serviceTwoContent.title5}
                <RightArrowIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {serviceStats.map(({ id, icon: Icon, title, description }) => (
            <div key={id}>
              <Icon />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                {title}
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
