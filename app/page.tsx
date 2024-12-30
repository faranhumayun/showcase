import { CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'

export default async function Home() {
  const allCars:[{model:string,class:string,drive:string}] = await fetchCars()
  console.log(allCars)
  
  return (
    <main className="overflow-hidden">
      <Hero />

      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore your favourite cars</p>
        </div>

        <div className='home__filters'>
          <SearchBar/>

          <div className='home__filter-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        <div className='flex flex-wrap gap-5 items-center justify-center w-2/3 flex-shrink-0 flex-grow'>
        {
          allCars.map((item) => (
            <div className='h-52 w-52 bg-[#f9f9f9]'>
              <p>{item.model}</p>
              <p>{item.class}</p>
              <p>{item.drive}</p>
            </div>
          ))
        }
        </div>

      </div>
    </main>
  )
}
