
import ImageElement from '@/components/ImageElement';

const KasarHausaImageSection = () => {

  let imageUrl = 'https://facts.net/wp-content/uploads/2023/07/36-facts-about-kaduna-1688455183.jpeg'
  return (
    <section className="container mx-auto">
      <div>
        <ImageElement src={imageUrl} className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit" alt='Kasar hausa main image' />
      </div>
    </section>
  )
}

export default KasarHausaImageSection