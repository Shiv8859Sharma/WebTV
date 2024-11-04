
import ImageElement from '@/components/ImageElement';

const KasarHausaImageSection = () => {

  let imageUrl = 'https://facts.net/wp-content/uploads/2023/07/36-facts-about-kaduna-1688455183.jpeg'
  return (
    <section className="container mx-auto">
      {/* <div>
        <ImageElement src={imageUrl} className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit" alt='Kasar hausa main image' />
      </div> */}
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
    </section>
  )
}

export default KasarHausaImageSection