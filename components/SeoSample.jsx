import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const SeoSample = ({ category }) => {
  const data = {
    'SEO & PPC': [
      {
        img: '/testImage/seo.jpg',
        alt: 'firstseo',
      },
      {
        img: '/testImage/secondSEO.jpg',
        alt: 'secondseo',
      },
      {
        img: '/testImage/thirdSEO.jpg',
        alt: 'thirdseo',
      },
      {
        img: '/testImage/fourthSEO.jpg',
        alt: 'fourthseo',
      },
    ],
    'Content Development': [
      {
        img: '/testImage/contentOne.jpg',
        alt: 'firstcontent',
      },
      {
        img: '/testImage/contentTwo.jpg',
        alt: 'secondcontent',
      },
      {
        img: '/testImage/contentThree.jpg',
        alt: 'thirdcontent',
      },
      {
        img: '/testImage/contentFour.jpg',
        alt: 'fourthcontent',
      },
    ],
    'Web Development': [
      {
        img: '/testImage/webOne.jpg',
        alt: 'firstweb',
      },
      {
        img: '/testImage/webTwo.jpg',
        alt: 'secondweb',
      },
      {
        img: '/testImage/webThree.jpg',
        alt: 'thirdweb',
      },
      {
        img: '/testImage/webFour.jpg',
        alt: 'fourthweb',
      },
    ],
    'Graphics Design': [
      {
        img: '/testImage/designOne.jpg',
        alt: 'firstgraphics',
      },
      {
        img: '/testImage/designTwo.jpg',
        alt: 'secondgraphics',
      },
      {
        img: '/testImage/designThree.jpg',
        alt: 'thirdgraphics',
      },
      {
        img: '/testImage/designFour.jpg',
        alt: 'fourthgraphics',
      },
    ],
  };

  const images = data[category];

  return (
    <section className='w-[100%]'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <article className='rounded-md bg-white p-4 flex flex-col justify-center items-center gap-[0.5rem] h-[200px]'>
              <Image src={item.img} alt={item.alt} width={200} height={200} className='rounded-full' />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SeoSample;
