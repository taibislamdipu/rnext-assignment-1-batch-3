import DribbbleIcon from "../icons/DribbbleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import GitHubGrayIcon from "../icons/GitHubGrayIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
        {/* Sub Footer 1 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h3>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
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
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <GitHubGrayIcon />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <DribbbleIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
