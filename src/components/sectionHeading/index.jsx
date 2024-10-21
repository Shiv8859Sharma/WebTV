import NavigatePage from "../navigatePage";

const SectionHeading = ({ title, url }) => {
  return (
    <div className="w-full py-3 flex justify-between items-center">
      <h2 className="text-gray-800 text-2xl font-bold">
        <span className="inline-block h-5 border border-l-4 border-[#f79e4d] mr-2"></span>{title}
      </h2>
      {
        url && <NavigatePage url={url}>
          View All
        </NavigatePage>
      }

    </div>
  );
};

export default SectionHeading;