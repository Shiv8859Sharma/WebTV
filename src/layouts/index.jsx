import { Outlet } from "react-router-dom";
import Headers from "@/layouts/headers";
import { Suspense, memo, useMemo, useRef } from "react";
import Footer from "@/layouts/footer";
import ScrollToTopOnRouteChange from "../constants/ScrollToTopOnRouteChange";
import SideBar from "./sideBars/sidebar.index";
import logo from "@/assets/webp/logo.webp";
import slogan from "@/assets/webp/slogan.webp";

const layout = ({ userType }) => {
  const contentLayoutRef = useRef(null);

  let InitialLoader = () => {
    return (
      <div className="flex items-center justify-center h-full w-[100vw]">
        <p className="text-center flex flex-col justify-center items-center gap-3">
          {/* <SvgIcon name='logo' folderName='commonAssets' outSide='..' width='3.8rem' /> */}
          <img
            src={logo}
            loading="lazy"
            alt="logo"
            className="h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32"
          />
          <span className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-[#4ED4F7] via-[#2C57F3] to-[#7143D7]">
            <img
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

  let hasSideBar = ["admin"];

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
  const showSidebar = useMemo(
    () => hasSideBar.includes(userType),
    [hasSideBar, userType]
  );

  return (
    <div className="h-full w-full overflow-hidden">
      <Suspense fallback={<InitialLoader />}>
        <div className={headerHeight}>
          <Headers />
        </div>

        <div className={`${contentHeight} w-full min-h-40`}>
          <div
            ref={contentLayoutRef}
            className="h-full overflow-x-auto scrollbar"
          >
            <ScrollToTopOnRouteChange contentLayout={contentLayoutRef} />

            <div className={showSidebar ? "flex gap-2" : ""}>
              {showSidebar && (
                <div>
                  <SideBar />
                </div>
              )}
              <Outlet />
            </div>

            <Footer companyName="Bakandamiya TV" />
          </div>
        </div>
      </Suspense>
    </div>
  );
};
export default memo(layout);
