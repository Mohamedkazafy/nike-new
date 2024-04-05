import { CustomerReviewe,SpecialOffers, Footer, Hero, PopularProducts, SuperQuailty, Subscribe, Services } from "./sections"
import Nav from './compontents/Nav'
const App = () => {
  return (
  <main className='relative'>
    <Nav/>
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
      <PopularProducts/>
    </section>
    <section className='padding'>
      <SuperQuailty/>
    </section>
    <section className='padding-x py-10'>
      <Services/>
    </section>
    <section className='padding'>
      <SpecialOffers/>
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviewe/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section>
    <section className='padding-x bg-black padding-t pb-8'>
      <Footer/>
    </section>
  </main>
  )
}

export default App