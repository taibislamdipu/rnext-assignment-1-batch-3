import Button from "./ui/Button";

export default function Navbar() {
  const navLinks = {
    brand: {
      logo: "./assets/logo.svg",
      name: "Learn with Sumit",
    },

    menu: [
      { label: "Home", href: "#", active: true },
      { label: "Company", href: "#" },
      { label: "Marketplace", href: "#" },
      { label: "Features", href: "#" },
      { label: "Team", href: "#" },
      { label: "Contact", href: "#" },
    ],

    cta: {
      label: "Download",
      href: "#",
    },
  };

  return (
    <header className="fixed w-full">
      <nav className="border-gray-200 bg-white py-2.5 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          <a href="#" className="flex items-center">
            <img
              src={navLinks.brand.logo}
              className="mr-3 h-6 sm:h-9"
              alt={navLinks.brand.name}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {navLinks.brand.name}
            </span>
          </a>

          <div className="flex items-center lg:order-2">
            <Button>{navLinks.cta.label}</Button>
          </div>

          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {navLinks.menu.map((item) => (
                <li>
                  <a
                    href="#"
                    className={`${
                      item.active && "text-white dark:text-white"
                    } block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-purple-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white`}
                    aria-current="page"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
