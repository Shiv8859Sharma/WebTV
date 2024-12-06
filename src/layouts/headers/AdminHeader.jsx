import { memo } from "react";
import NavigatePage from "@/components/navigatePage";
import logo from "@/assets/webp/logo.webp";
import slogan from "@/assets/webp/slogan.webp";
import { logOutUser } from "@/globalStates/actions/authAction";
import MenuDropDown from "@/components/dropDown";
import ImageElement from "@/components/ImageElement";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const AdminHeader = () => {
  return (
    <div className="bg-white h-full w-full">
      {/* Mobile menu */}
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
            <div className="flex items-center">
              <ProfileMenuButton dropDownClass="right-0" />
            </div>

            {/* <HamburgerButton barclass='bg-white' fill='#ffffff' setToggelMenu={setOpen} isOpen={open} /> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default memo(AdminHeader);

const ProfileMenuButton = ({ src = "", dropDownClass = "" }) => {
  let menuTitle = (
    <>
      <ImageElement
        src={src}
        type="profile"
        alt="user-profile"
        className="w-12 h-12"
      />
      <ChevronDownIcon className="w-4 h-4 text-white opacity-75 hover:opacity-100" />
    </>
  );
  return (
    <MenuDropDown
      menuButtonTitle={menuTitle}
      menuItems={[
        {
          label: (
            <NavigatePage
              id="logout"
              url="/"
              type="dispatchAction"
              dispatchFun={logOutUser()}
            >
              Logout
            </NavigatePage>
          ),
        },
      ]}
      menuItemsClass={`bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${dropDownClass}`}
      itemClass="text-[#FFFFFF] hover:bg-[#4361EE]"
    />
  );
};
