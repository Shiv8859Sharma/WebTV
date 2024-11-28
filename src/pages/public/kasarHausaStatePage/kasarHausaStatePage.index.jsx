import { useParams } from "react-router-dom";
import KasarHausaStateHeroSection from "./kasarHausaState.heroSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // fetchSingleBlog,
  fetchAllBlog,
} from "@/globalStates/actions/blogActions";

const KasarHausaStatePage = ({ categories }) => {
  const { subCategory } = useParams();
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blog.allBlogs?.rows[0]);
  // console.log("blogData :::", blogData);

  // Use state for the active tab with a fallback to the first category.
  const [isActiveTab, setIsActiveTab] = useState(() => categories[0] || null);

  // Set the active tab to the first category when the categories array changes.
  useEffect(() => {
    if (categories.length > 0) {
      setIsActiveTab(categories[0]);
    }
  }, [categories]);

  // Fetch the blog data when isActiveTab changes, using useCallback for handler.
  useLayoutEffect(() => {
    if (isActiveTab?.id) {
      dispatch(
        fetchAllBlog({
          pagination: {
            page: 1,
            limit: 10,
          },
          filters: {
            category_id: isActiveTab?.id,
          },
        })
      );
    }
  }, [dispatch, isActiveTab?.id]);

  // Using useCallback to memoize handleTabChange function for better performance.
  const handleTabChange = useCallback((e, category) => {
    setIsActiveTab(category);
  }, []);

  // Memoizing categories to avoid unnecessary re-renders.
  const memoizedCategories = useMemo(() => categories, [categories]);

  return (
    <div>
      <SectionNavigation
        title={subCategory}
        showCategory
        categories={memoizedCategories}
        as="tab"
        isActive={isActiveTab?.name}
        onChangeTab={handleTabChange}
      />
      {isActiveTab?.name && blogData && (
        <KasarHausaStateHeroSection
          currentTab={isActiveTab.name}
          articleDetails={blogData}
        />
      )}
    </div>
  );
};

export default KasarHausaStatePage;
