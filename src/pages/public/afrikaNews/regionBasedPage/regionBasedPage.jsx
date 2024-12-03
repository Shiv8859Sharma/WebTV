import { useEffect } from "react";
import RegionBasedPageHeroSection from "./regionBasedPage.heroSection";
import NewsFeedRegionBased from "./regionBasedPage.newsFeed";
import { useParams } from "react-router-dom";
import {
  AfrikaTaYammaPageArticles,
  ArewacinAfrikaPageArticles,
  GabashinAfrikaPageArticles,
  KudancinAfrikaPageArticles,
} from "@/globalStates/actions/articleAction";
import { useDispatch } from "react-redux";

const RegionBasedPage = () => {
  let { subCategory } = useParams();
  const dispatch = useDispatch();
  // const { afirkaRegionBasedData } = useSelector((state) => state?.articles);

  let callApi = {
    kudancin_afirka: KudancinAfrikaPageArticles,
    arewacin_afirka: ArewacinAfrikaPageArticles,
    afirka_ta_yamma: AfrikaTaYammaPageArticles,
    gabashin_afirka: GabashinAfrikaPageArticles,
  };

  useEffect(() => {
    dispatch(callApi[subCategory]());
    // eslint-disable-next-line
  }, [dispatch, subCategory]);

  return (
    <div>
      <RegionBasedPageHeroSection />
      <NewsFeedRegionBased />
    </div>
  );
};

export default RegionBasedPage;
