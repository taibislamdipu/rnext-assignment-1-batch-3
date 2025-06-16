export default function Button({ children }) {
  return (
    <a
      href="#"
      className="mr-2 mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
    >
      {children}
    </a>
  );
}
