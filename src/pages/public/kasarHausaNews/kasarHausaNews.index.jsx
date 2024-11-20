import { memo, useEffect, useState, useMemo } from "react";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import KasarHausaImageSection from "./kasarHausaImageSection";
import HausaNewsSection from "./hausaNewsSection/hausaNewsSection";
import paths from "@/routes/paths";

// Debounce utility to limit function calls
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const KasarHausaNews = ({ categories }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect initial screen size on mount
  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 768);

    const handleResize = debounce(() => {
      setIsLargeScreen(window.innerWidth >= 768);
    }, 150); // Debounce resize handler by 150ms

    window.addEventListener("resize", handleResize);

    // Clean up listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Memoize displayLinks to avoid unnecessary recalculations
  const displayLinks = useMemo(() => {
    if (isLargeScreen) {
      // For large screens, show only the first 6 items, and the rest in "More" dropdown
      const mainLinks = categories.slice(0, 6)
      const moreLinks = categories.slice(6)

      return [
        ...mainLinks,
        {
          name: 'More',
          dropdown: true,
          dropDownList: moreLinks,
        },
      ];
    } else {
      // For small screens, display all items as a list
      return categories
    }
  }, [isLargeScreen, categories]);

  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation
        title={"Kasar Hausa"}
        showCategory
        categories={displayLinks}
      />
      <KasarHausaImageSection />
      <HausaNewsSection />
    </div>
  );
};

export default memo(KasarHausaNews);
