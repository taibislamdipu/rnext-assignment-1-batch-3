import CheckIcon from "../icons/CheckIcon";
import HeadingTwo from "./HeadingTwo";
import Image from "./Image";
import Paragraph from "./Paragraph";

export default function ServiceOne() {
  const serviceOneContent = {
    title1: "Work with tools you already use",
    desc1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    desc2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    imgPath: "./assets/features/feature-1.png",
    imgAlt: "dashboard feature image",
  };

  const serviceTwoContent = {
    title1: "We invest in the world's potential",
    desc1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    desc2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
    imgPath: "./assets/features/feature-2.png",
    imgAlt: "dashboard feature image",
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

  const serviceTwoListItem = [
    {
      id: 1,
      content: "Dynamic reports and dashboards",
    },
    {
      id: 2,
      content: "Templates for everyone",
    },
    {
      id: 3,
      content: "Development workflow",
    },
    {
      id: 4,
      content: "Limitless business automation",
    },
    {
      id: 5,
      content: "Knowledge management",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20 lg:px-6 lg:py-24">
        {/* Sub Service 1 */}
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
          <Image
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src={serviceOneContent.imgPath}
            alt={serviceOneContent.imgAlt}
          />
        </div>

        {/* Sub Service 2  */}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src={serviceTwoContent.imgPath}
            alt={serviceTwoContent.imgAlt}
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <HeadingTwo className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {serviceTwoContent.title1}
            </HeadingTwo>
            <Paragraph className="mb-8 font-light lg:text-xl">
              {serviceTwoContent.desc1}
            </Paragraph>

            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              {serviceTwoListItem.map((item) => (
                <li className="flex space-x-3">
                  <CheckIcon />
                  <span className="text-base leading-tight font-medium text-gray-900 dark:text-white">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
            <Paragraph className="font-light lg:text-xl">
              {serviceTwoContent.desc2}
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
