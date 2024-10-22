import ImageElement from '@/components/ImageElement';
import ArticleHeading from '@/components/article/articleHeading';
import ArticleTitle from '@/components/article/articleTitle';
import NavigatePage from '@/components/navigatePage';

const DuniyaImageSection = () => {

  let imageUrl = 'https://www.aljazeera.com/wp-content/uploads/2024/10/2024-10-21T115556Z_2141171617_RC2YOAA9KH7P_RTRMADP_3_MOZAMBIQUE-ELECTION-1729538456.jpg?resize=770%2C513&quality=80'
  return (
    <section className="container mx-auto rounded">
      <NavigatePage url='' className='flex flex-col gap-3'>
        <ImageElement src={imageUrl} className="w-full h-[22rem] md:h-[25rem] lg:h-[34rem] aspect-video rounded-md object-fit" alt='Kasar hausa main image' />
        <ArticleHeading
          heading='Police in Mozambique disperse opposition protest after disputed election'
          className='text-4xl font-extrabold'
        />
        <ArticleTitle
          title={`Riot police in Mozambique’s capital, Maputo, fired tear gas to disperse a crowd protesting against alleged electoral fraud days after two opposition allies were shot dead. Several hundred people, including journalists, scattered as heavily armed police marched down a main street on Monday. The Reuters news agency reported some police officers firing handguns while dispersing the crowd.`}
          className='line-clamp-2 text-xl font-light'
        />
      </NavigatePage>
      <hr class="w-full h-0.5 mt-10 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </section>
  )
}

export default DuniyaImageSection;