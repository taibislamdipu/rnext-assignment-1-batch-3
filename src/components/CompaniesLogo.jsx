/* eslint-disable no-unused-vars */
import AirbnbIcon from "../icons/AirbnbIcon";
import GoogleIcon from "../icons/GoogleIcon";
import MailchimpIcon from "../icons/MailchimpIcon";
import MashableIcon from "../icons/MashableIcon";
import MicrosoftIcon from "../icons/MicrosoftIcon";
import SpotifyIcon from "../icons/SpotifyIcon";

const companyIcons = [
  { id: "airbnb", Icon: AirbnbIcon, link: "#" },
  { id: "google", Icon: GoogleIcon, link: "#" },
  { id: "microsoft", Icon: MicrosoftIcon, link: "#" },
  { id: "spotify", Icon: SpotifyIcon, link: "#" },
  { id: "mailchimp", Icon: MailchimpIcon, link: "#" },
  { id: "mashable", Icon: MashableIcon, link: "#" },
];

export default function CompaniesLogo() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-16">
        <div className="grid grid-cols-2 gap-8 pt-8 text-gray-500 sm:grid-cols-3 sm:gap-12 md:mt-0 lg:grid-cols-6 dark:text-gray-400">
          {companyIcons.map(({ id, Icon, link }) => (
            <a
              key={id}
              href={link}
              className="flex items-center lg:justify-center"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
