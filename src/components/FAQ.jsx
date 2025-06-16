import ArrowUp from "../icons/ArrowUp";
import DownArrow from "../icons/DownArrow";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Can I use Landwind in open-source projects?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </>
      ),
    },
    {
      id: 2,
      question: "Is there a Figma file available?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Landwind.
          </p>
        </>
      ),
    },
    {
      id: 3,
      question: "What are the differences between Landwind and Tailwind UI?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Landwind are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Landwind relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Landwind, Landwind Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Landwind Pro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      question: "What about browser support?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Landwind are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Landwind relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Landwind, Landwind Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Landwind Pro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:px-6 lg:pb-24">
        <h2 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="mx-auto max-w-screen-md">
          <div id="accordion-flush">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <h3 id={`accordion-flush-heading-${faq.id}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target={`#accordion-flush-body-${faq.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`accordion-flush-body-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    {index === 0 ? <ArrowUp /> : <DownArrow />}
                  </button>
                </h3>
                <div
                  id={`accordion-flush-body-${faq.id}`}
                  className={index === 0 ? "" : "hidden"}
                  aria-labelledby={`accordion-flush-heading-${faq.id}`}
                >
                  <div className="border-b border-gray-200 py-5 dark:border-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
