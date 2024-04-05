import Button from '../compontents/Button'
import {shoe8} from '../assets/images'
const SuperQuailty = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] capitalize font-bold lg:max-w-lg'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          We Provide You
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Super Quailty</span> shoe
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulosly crafted footwear is designed to elevate your experience, Providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
        <Button label='View details'/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe"  width={570} height={522} className=' object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuailty