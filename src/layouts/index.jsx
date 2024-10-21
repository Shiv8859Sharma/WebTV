import { Outlet } from "react-router-dom"
import Headers from '@/layouts/headers'
import { Suspense, memo } from "react";
import Footer from "@/layouts/footer";
import SvgIcon from "@/assets/svg/svgIcon"

const layout = ({ userType }) => {
  let InitialLoader = () => {

    return (
      <div className="flex items-center justify-center h-full w-[100vw]">
        <p className="text-center flex gap-1">
          <SvgIcon name='logo' folderName='commonAssets' outSide='..' width='3.8rem' />
          <span className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-[#4ED4F7] via-[#2C57F3] to-[#7143D7]">
            Bakandamiya TV
          </span>
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="h-full w-full overflow-hidden">
        <div className={`${userType === '' ? 'h-[7.5rem] lg:h-[11.2rem]' : 'h-[5.5rem]'}`}>
          <Headers />
        </div>
        <Suspense fallback={InitialLoader()}>
          <div className={`${userType === '' ? 'h-[calc(100vh-7.5rem)] lg:h-[calc(100vh-11.2rem)] w-full' : 'h-[calc(100vh-5.5rem)] w-full'}`}>
            <div className="h-full overflow-x-auto scrollbar">
              <Outlet />
              <div className="max-h-[7rem]">
                <Footer
                  companyName='Bakandamiya TV'
                />
              </div>

            </div>
          </div>
        </Suspense>
      </div>
    </>
  )

}
export default memo(layout)