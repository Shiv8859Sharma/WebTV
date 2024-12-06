import { Outlet } from "react-router-dom";
import Headers from "@/layouts/headers";
import { Suspense, memo, useMemo, useRef } from "react";
import Footer from "@/layouts/footer";
import ScrollToTopOnRouteChange from "../constants/ScrollToTopOnRouteChange";
import SideBar from "./sideBars/sidebar.index";
import logo from "@/assets/webp/logo.webp";
import slogan from "@/assets/webp/slogan.webp";
import PopupComponent from "@/components/popUp/popup.index";
import ImageElement from "@/components/ImageElement";

let hasSideBar = ["admin"];

const Layout = ({ userType }) => {
  const contentLayoutRef = useRef(null);

  let InitialLoader = () => {
    return (
      <div className="flex items-center justify-center h-full w-[100vw]">
        <p className="text-center flex flex-col justify-center items-center gap-3">
          {/* <SvgIcon name='logo' folderName='commonAssets' outSide='..' width='3.8rem' /> */}
          <ImageElement
            src={logo}
            loading="lazy"
            alt="logo"
            className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32"
          />
          <span className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-[#4ED4F7] via-[#2C57F3] to-[#7143D7]">
            <ImageElement
              src={slogan}
              loading="lazy"
              alt="logo"
              className="header-logo"
            />
          </span>
        </p>
      </div>
    );
  };

  // Calculate height based on `userType`
  const headerHeight = useMemo(
    () => (userType === "" ? "h-[8rem] lg:h-[13rem]" : "h-[9rem]"),
    [userType]
  );
  const contentHeight = useMemo(
    () =>
      userType === ""
        ? "h-[calc(100vh-8rem)] lg:h-[calc(100vh-13rem)]"
        : "h-[calc(100vh-9rem)]",
    [userType]
  );

  // Determine sidebar visibility
  const showSidebar = useMemo(() => hasSideBar.includes(userType), [userType]);

  return (
    <div className="h-full w-full overflow-hidden">
      <Suspense fallback={<InitialLoader />}>
        {/* Header */}
        <div className={`${headerHeight} bg-gray-100 shadow-md`}>
          <Headers />
        </div>

        {/* Main Content Area */}
        <div className={`${contentHeight} w-full min-h-96`}>
          <div
            ref={contentLayoutRef}
            className="h-full overflow-x-auto scrollbar"
          >
            <ScrollToTopOnRouteChange contentLayout={contentLayoutRef} />

            {/* Grid Layout */}
            <div className={`grid grid-rows-[auto_1fr_auto] h-full`}>
              {/* Main Content Row */}
              <div
                className={`grid ${showSidebar ? "grid-cols-1 md:grid-cols-[auto_1fr]" : ""} gap-4`}
              >
                {/* Sidebar (Visible on larger screens only if showSidebar is true) */}
                {showSidebar && (
                  <div className="hidden md:block bg-gray-200 min-w-[200px] lg:min-w-[250px] xl:min-w-[300px]">
                    <SideBar />
                  </div>
                )}

                {/* Main Content */}
                <div className="bg-white shadow-lg p-4 rounded-lg overflow-auto">
                  <Outlet />
                </div>
              </div>
              {/* Footer */}
              <div className="bg-gray-100 relative">
                <Footer companyName="Bakandamiya TV" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <PopupComponent />
        </div>
      </Suspense>
    </div>
  );
};
export default memo(Layout);
