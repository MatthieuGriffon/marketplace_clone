import { useState } from "react";
import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/outline";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import Logo from "../../assets/svg/logo.svg";

const navigation = [
  "Immobilier",
  "Véhicules",
  "Locations de vacances",
  "Emploi",
  "Mode",
  "Maison & Jardin",
  "Famille",
  "Électronique",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Leboncoin</span>
              <img src={Logo} className="App-logo" alt="logo" />
              test
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars4Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
