import { Fragment, memo, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Link } from "react-router-dom"; // Import Link for navigation
import HamburgerButton from "@/components/buttons/hamburgerButton";
import NavigatePage from "@/components/navigatePage";
import logo from "@/assets/webp/logo.webp";
import slogan from "@/assets/webp/slogan.webp";

const LandingPageHeader = () => {
  const [open, setOpen] = useState(false);

  const handleHideMobileTab = (event) => {
    const clickedElement = event.target;
    let targetedID = clickedElement.closest("[id]")?.getAttribute("id");
    let id = [
      "findExperts",
      "findWork",
      "awsAdvisory",
      "salesforceAdvisory",
      "howItWorks",
      "helpCenter",
      "login",
      "signUp",
      "payments",
      "notifications",
    ];
    if (id.includes(targetedID) && open) {
      setOpen(false);
    }
  };

  return (
    <div className="bg-white h-full w-full">
      {/* Mobile menu */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed top-[7rem] inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-700 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-700 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div
                  className="space-y-3 border-t border-gray-200 px-4 py-6 z-20"
                  onClick={handleHideMobileTab}
                >
                  {/* Mobile menu items */}
                  <Link
                    to="/"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/news/kasar-hausa"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Kasar Hausa
                  </Link>
                  <Link
                    to="/news/afrika"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Afirka
                  </Link>
                  <Link
                    to="/news/duniya"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Duniya
                  </Link>
                  <Link
                    to="/news/kasuwanci"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Kasuwanci
                  </Link>
                  <Link
                    to="/news/wasanni"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Wasanni
                  </Link>
                  <Link
                    to="/news/yanayi-a-yau"
                    className="block px-4 py-1 rounded-md hover:bg-gray-300"
                  >
                    Yanayi a yau
                  </Link>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="fixed w-full bg-black text-white z-40 shadow-sm">
        <nav aria-label="Top" className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Mobile menu button */}

            {/* Logo */}
            <div className="flex items-center">
              <NavigatePage
                id="logo"
                url="/"
                className="flex justify-center items-center cursor-pointer"
              >
                <span className="sr-only">Your Company</span>
                <img
                  src={logo}
                  loading="lazy"
                  alt="logo"
                  className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 max-w-full header-logo"
                />
              </NavigatePage>
            </div>

            <div className="flex items-center">
              <NavigatePage
                id="logo"
                url="/"
                className="flex justify-center items-center cursor-pointer"
              >
                <span className="sr-only">Your Company</span>
                <img
                  src={slogan}
                  loading="lazy"
                  alt="logo"
                  className="header-logo"
                />
              </NavigatePage>
            </div>

            <HamburgerButton
              barclass="bg-white"
              fill="#ffffff"
              setToggelMenu={setOpen}
              isOpen={open}
            />

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-end space-x-4">
                <button className="hidden lg:flex gap-2 items-center px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-400">
                  <span className="animate-slow-ping w-3 h-3 bg-red-500 rounded-full"></span>
                  KAI-TSAYE TV
                </button>
                <button className="hidden lg:inline-block px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-400">
                  KAI-TSAYE RADIO
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-2 border-t border-gray-200 bg-gray-100 text-gray-700 border-b-2 border-gray-700">
          <nav aria-label="Top" className="container mx-auto px-4">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:py-2 gap-2">
              <Link to="/" className="px-4 py-2 font-medium">
                GIDA
              </Link>
              <Link to="/news/kasar-hausa" className="px-4 py-2 font-medium">
                Kasar Hausa
              </Link>
              <Link to="/news/afrika" className="px-4 py-2 font-medium">
                Afirka
              </Link>
              <Link to="/news/duniya" className="px-4 py-2 font-medium">
                Duniya
              </Link>
              <Link to="/news/kasuwanci" className="px-4 py-2 font-medium">
                Kasuwanci
              </Link>
              <Link to="/news/wasanni" className="px-4 py-2 font-medium">
                Wasanni
              </Link>
              <Link to="/news/yanayi-a-yau" className="px-4 py-2 font-medium">
                Yanayi a yau
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default memo(LandingPageHeader);
