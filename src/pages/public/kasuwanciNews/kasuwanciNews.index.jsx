import { memo } from "react";
import KasumanciImageSection from "./KasumanciImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import KasuwanciHeroGrid from "./kasuwanciHeroGrid";
import AdvertisingSection from "@/components/advertising/advertisingSection";

const KasuwanciNews = () => {
  return (
    <div className="">
      <SectionNavigation title={"Kasuwanci"} />
      <section className="container mx-auto px-4">
      <div className="flex gap-10 w-full justify-center relative">
        <AdvertisingSection />
        <div>
          <KasumanciImageSection />
          <KasuwanciHeroGrid />
        </div>
      </div>
      </section>
    </div>
  );
};

export default memo(KasuwanciNews);