// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import pic8 from '../assets/pic8.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    < div className='container px-6 py-10 mx-auto' style={{
      
    }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${pic8})`,
        border:"5px solid",
        borderRadius:"10px"}}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-600/50'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
           WELCOME<span class='text-blue-400'>  TO</span><br></br>
          READtoLEAD
          </h1>
          <p className="mx-40 text-2xl"style={{color:"#fff", textAlign:"center"}}>“Libraries store the energy that fuels the imagination. They open up windows to the world and inspire us to explore,achieve and contribute to improving our quality of life.”</p>
          <br />
          <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
          Explore
          </button>
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide> <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${pic5})`,
        border:"5px solid",
        borderRadius:"10px"}}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-600/50'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
           WELCOME<span class='text-blue-400'>  TO</span><br></br>
          READtoLEAD
          </h1>
          <p className="mx-40 text-2xl"style={{color:"#fff", textAlign:"center"}}>"A library is like an island in the middle of a vast sea of ignorance, particularly if the library is very tall and the surrounding area has been flooded"</p>
          <br />
          <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
           Explore
          </button>
        </div>
      </div>
    </div></SwiperSlide>
        <SwiperSlide> <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${pic6})`,
        border:"5px solid",
        borderRadius:"10px"}}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-600/50'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
           WELCOME<span class='text-blue-400'>  TO</span><br></br>
          READtoLEAD
          </h1>
          <p className="mx-40 text-2xl"style={{color:"#fff", textAlign:"center"}}>“A good library will never be too neat, or too dusty, because somebody will always be in it, taking books off the shelves and staying up late reading them.”</p>
          <br />
          <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
            Explore
          </button>
        </div>
      </div>
    </div></SwiperSlide>
      </Swiper>
    </div>
  );
}
