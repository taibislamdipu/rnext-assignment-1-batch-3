import FigmaIcon from "../icons/FigmaIcon";
import GitHubIcon from "../icons/GitHubIcon";

export default function HeroSection() {
  const heroContent = {
    title1: "Building digital",
    title2: "products & brands.",
    description: (
      <>
        This free and open-source landing page template was built using the
        utility classes from{" "}
        <a href="#" className="hover:underline">
          Tailwind CSS
        </a>{" "}
        and based on the components from the Flowbite Library and the Blocks
        System.
      </>
    ),
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 pt-20 pb-8 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            {heroContent.title1} <br />
            {heroContent.title2}
          </h1>

          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            {heroContent.description}
          </p>

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 sm:w-auto dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <GitHubIcon /> View on GitHub
            </a>

            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-none sm:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <FigmaIcon /> Get Figma file
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src="./assets/hero.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
