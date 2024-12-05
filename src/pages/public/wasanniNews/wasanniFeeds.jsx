import NewsFeeds from "@/pages/newsFeeds/newsFeeds";
import { useDispatch, useSelector } from "react-redux";
import { WasanniPageNewsFeedsArticles } from "@/globalStates/actions/articleAction";
import { memo, useEffect, useState } from "react";

const WasanniNewsFeeds = () => {
  const dispatch = useDispatch();
  const { wasanniFeeds } = useSelector((state) => state?.articles);
  const isLoading = useSelector((state) => state.loader?.isLoading);

  // Local state for pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchArticles(page);
    // eslint-disable-next-line
  }, [page]);

  const fetchArticles = (currentPage) => {
    dispatch(
      WasanniPageNewsFeedsArticles({
        pagination: {
          page: currentPage,
        },
      })
    );
  };

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const { count = 0, rows = [] } = wasanniFeeds || {};

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <NewsFeeds
        feeds={rows} // Display fetched articles or fallback to default
        onShowMore={handleShowMore}
        showButton={rows.length < count && !isLoading}
      />
    </div>
  );
};

export default memo(WasanniNewsFeeds);
