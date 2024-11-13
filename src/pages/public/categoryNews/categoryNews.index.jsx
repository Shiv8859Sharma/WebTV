import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import KasarHausaNewsIndex from "../kasarHausaNews/kasarHausaNews.index";
import AfrikaNewsIndex from "../afrikaNews/afrikaNews.index";
import KasuwanciNewsIndex from "../kasuwanciNews/kasuwanciNews.index";
import WasanniNewsIndex from "../wasanniNews/wasanniNews.index";
import Yanayi_a_yau_newsIndex from "../yanayi_a_yau_news/yanayi_a_yau_news.index";
import DuniyaNewsIndex from "../duniyaNews/duniyaNews.index";

const CategoryNews = () => {
  const param = useParams();

  const categoryName = useMemo(() => {
    return param?.categoryName;
  }, [param?.categoryName]);

  const currentPage = useMemo(() => {
    switch (categoryName) {
      case "kasar-hausa":
        return <KasarHausaNewsIndex />;
      case "afrika":
        return <AfrikaNewsIndex />;
      case "duniya":
        return <DuniyaNewsIndex />;
      case "kasuwanci":
        return <KasuwanciNewsIndex />;
      case "wasanni":
        return <WasanniNewsIndex />;
      case "yanayi-a-yau":
        return <Yanayi_a_yau_newsIndex />;
      default:
        return (
          <div className="flex w-full h-96 justify-center items-center ">
            <p className="text-5xl">We are working on this page</p>
          </div>
        );
    }
  }, [categoryName]);

  return <main className="bg-white py-6">{currentPage}</main>;
};

export default memo(CategoryNews);
