import CheckIcon from "../icons/CheckIcon";
import HeadingTwo from "./HeadingTwo";
import Paragraph from "./Paragraph";

export default function ServiceOne() {
  const serviceOneContent = {
    title1: "Work with tools you already use",
    desc1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    desc2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
  };

  const serviceOneListItem = [
    {
      id: 1,
      content: "Continuous integration and deployment",
    },
    {
      id: 2,
      content: "Development workflow",
    },
    {
      id: 3,
      content: "Knowledge management",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
        {/* <!-- Sub Service 1 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <HeadingTwo className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {serviceOneContent.title1}
            </HeadingTwo>
            <Paragraph className="mb-8 font-light lg:text-xl">
              {serviceOneContent.desc1}
            </Paragraph>

            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              {serviceOneListItem.map((item) => (
                <li className="flex space-x-3">
                  <CheckIcon />
                  <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>

            <Paragraph className="mb-8 font-light lg:text-xl">
              {serviceOneContent.desc2}
            </Paragraph>
          </div>
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="./assets/features/feature-1.png"
            alt="dashboard feature image"
          />
        </div>

        {/* <!-- Sub Service 2 --> */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="./assets/features/feature-2.png"
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We invest in the world’s potential
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                  Dynamic reports and dashboards
                </span>
              </li>

              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                  Templates for everyone
                </span>
              </li>

              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                  Development workflow
                </span>
              </li>

              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                  Limitless business automation
                </span>
              </li>

              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                  Knowledge management
                </span>
              </li>
            </ul>
            <p className="font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
