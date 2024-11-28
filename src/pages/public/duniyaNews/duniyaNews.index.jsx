import { memo, useEffect } from "react";
import DuniyaImageSection from "./duniyaImageSection";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import DuniyaNewsFeeds from "./duniyaNewsFeeds";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "@/layouts/skeletonLoaders";
import { DuniyaPageArticles } from "@/globalStates/actions/articleAction";

const DuniyaNews = ({ categories }) => {
  const dispatch = useDispatch();
  const { duniya } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  useEffect(() => {
    dispatch(
      DuniyaPageArticles({
        pagination: {
          page: 1,
        },
      })
    );
  }, [dispatch]);

  if (isLoading) {
    return <CustomLoader name="NewsSkeletonLoader"></CustomLoader>;
  }

  return (
    <div>
      <SectionNavigation
        title={"Duniya"}
        showCategory
        categories={categories}
      />
      <DuniyaImageSection article={duniya?.rows?.[0]} />
      <DuniyaNewsFeeds articles={duniya?.rows?.slice(1)} />
    </div>
  );
};

export default memo(DuniyaNews);
