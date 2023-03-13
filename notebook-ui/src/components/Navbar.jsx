import { useLocation } from 'react-router-dom';

 const active = "border-solid border-blue-600 border-b-2";

function Navbar(props) {
  const { section } = props;

  return (
    <div className="bg-white drop-shadow z-0 sticky top-0">
      <div className="ml-0.5 mr-0.5 flex h-14 items-center gap-8 px-6">
        <a
          className="block text-2xl font-bold text-blue-700 dark:text-blue-600"
          href="/"
        >
          Notebook
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-base">
              <li>
                <a
                  className={`text-black transition border-solid
                   hover:text-blue-600 ${section == "overview" && active}`}
                  href="/#overview"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  className={`text-black transition hover:text-blue-600
                  hover:text-blue-600 ${section == "features" && active}`}
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className={`text-black transition border-solid
                   hover:text-blue-600 ${section == "pricing" && active}`}
                  href="/pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-black transition border-solid hover:text-blue-600"
                  href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="hidden rounded-md bg-gray-100 text-black px-4 py-1.5
               text-sm font-medium transition border-2 border-white
                hover:border-black sm:block"
              href="/register"
            >
              Register
            </a>
            <a
              className="hidden rounded-md bg-blue-600 text-white px-4 py-1.5
              text-sm font-medium transition border-2 border-white
              hover:bg-gray-100 hover:text-blue-600 hover:border-blue-600 sm:block"
              href="/login"
            >
              Login
            </a>
          </div>

          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition
             hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="roundk"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div >
  );
}

export default Navbar;
