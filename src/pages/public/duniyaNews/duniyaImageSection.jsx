import ImageElement from '@/components/ImageElement';
import NavigatePage from '@/components/navigatePage';

const DuniyaImageSection = () => {

  let imageUrl = 'https://www.aljazeera.com/wp-content/uploads/2024/10/2024-10-21T115556Z_2141171617_RC2YOAA9KH7P_RTRMADP_3_MOZAMBIQUE-ELECTION-1729538456.jpg?resize=770%2C513&quality=80'
  return (
    <section className="container mx-auto rounded">
      <NavigatePage url='' className='flex flex-col gap-3'>
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <ImageElement
              src={imageUrl}
              alt="Pangolin Smuggling News"
              className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-4 left-4 max-w-xl w-full bg-white rounded">
              <h2 className="text-2xl  font-bold p-3">
                Premier League: West ham ta doke United, Chelsea ta yi nasara kan Newcastle
              </h2>
            </div>
          </div>
        </div>
      </NavigatePage>
    </section>
  )
}

export default DuniyaImageSection;