import DribbbleIcon from "../icons/DribbbleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import GitHubGrayIcon from "../icons/GitHubGrayIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

export default function Footer() {
  const footerLinksData = [
    {
      id: "company-1",
      title: "Company",
      links: [
        { id: "about", label: "About", href: "#" },
        { id: "careers", label: "Careers", href: "#" },
        { id: "brand-center", label: "Brand Center", href: "#" },
        { id: "blog", label: "Blog", href: "#" },
      ],
    },
    {
      id: "help-center",
      title: "Help center",
      links: [
        { id: "discord", label: "Discord Server", href: "#" },
        { id: "twitter", label: "Twitter", href: "#" },
        { id: "facebook", label: "Facebook", href: "#" },
        { id: "contact", label: "Contact Us", href: "#" },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      links: [
        { id: "privacy", label: "Privacy Policy", href: "#" },
        { id: "licensing", label: "Licensing", href: "#" },
        { id: "terms", label: "Terms", href: "#" },
      ],
    },
    {
      id: "company-2",
      title: "Company",
      links: [
        { id: "about-2", label: "About", href: "#" },
        { id: "careers-2", label: "Careers", href: "#" },
        { id: "brand-center-2", label: "Brand Center", href: "#" },
        { id: "blog-2", label: "Blog", href: "#" },
      ],
    },
    {
      id: "download",
      title: "Download",
      links: [
        { id: "ios", label: "iOS", href: "#" },
        { id: "android", label: "Android", href: "#" },
        { id: "windows", label: "Windows", href: "#" },
        { id: "mac", label: "MacOS", href: "#" },
      ],
    },
  ];

  const socialLinksData = [
    { id: "facebook", icon: <FacebookIcon />, href: "#" },
    { id: "instagram", icon: <InstagramIcon />, href: "#" },
    { id: "twitter", icon: <TwitterIcon />, href: "#" },
    { id: "github", icon: <GitHubGrayIcon />, href: "#" },
    { id: "dribbble", icon: <DribbbleIcon />, href: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
        {/* Sub Footer 1 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerLinksData.map((section) => (
            <div key={section.id}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {section.title}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {section.links.map((link) => (
                  <li key={link.id} className="mb-4">
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        {/* Sub Footer 2 */}
        <div className="text-center">
          <a
            href="#"
            className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src="./assets/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Learn with Sumit Logo"
            />
            Learn with Sumit
          </a>
          <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="mt-5 flex justify-center space-x-5">
            {socialLinksData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
