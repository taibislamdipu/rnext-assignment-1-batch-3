import QuotIcon from "../icons/QuotIcon";

export default function Testimonial() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-24">
        <figure className="mx-auto max-w-screen-md">
          <QuotIcon />
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              "Landwind is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <img
              className="h-6 w-6 rounded-full"
              src="./assets/avatar/michael-gouch.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                Micheal Gough
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                CEO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
