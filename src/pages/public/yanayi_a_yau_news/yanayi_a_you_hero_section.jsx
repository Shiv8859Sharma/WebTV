import { memo } from "react";
import ImageElement from "@/components/ImageElement";
import ArticleMeta from "@/components/articleMeta/articleMeta";
import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

const Yanayi_a_yau_hero_section = () => {

  return (
    <section className="container max-w-7xl mx-auto md:mt-5 pb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">
      <div className=" w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
              <video 
              className="w-full  aspect-video object-cover"
              controls
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              >

              </video>
          </div>
        </div>
      <div className=" w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={"https://hausa.info/wp-content/uploads/2023/10/Weather-in-Hausa.jpg.webp"}
              alt="Pangolin Smuggling News"
              className="w-full  aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-4 left-4 max-w-lg w-full bg-white rounded">
              <h2 className="text-2xl  font-bold p-3">
                {'Hurricane likely to brew in Caribbean, may reach US'}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default memo(Yanayi_a_yau_hero_section);
