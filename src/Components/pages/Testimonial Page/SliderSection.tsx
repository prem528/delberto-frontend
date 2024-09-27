import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testi1 from '../../../assets/img/testi1.png'
import testi2 from '../../../assets/img/testi2.png'
import testi3 from '../../../assets/img/testi3.png'

interface TestimonialProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="px-4">
      <div className="bg-gray-100 rounded-lg overflow-hidden flex">
        <div className="p-6 w-1/2">
          <h4 className="text-lg font-bold text-blue-900 mb-2">{title}</h4>
          <p className="text-gray-600 font-semibold mb-4">{description}</p>
          <a href="#" className="inline-block bg-white text-black px-4 py-2 rounded-lg border-2 hover:bg-blue-900 hover:text-white sm:px-2">
              Read Case Study
          </a>
        </div>
        <div className="hb-48 w-1/2 overflow-hidden">
          <img src={imageSrc} className="w-3/4 h-auto rounded-xl object-cover mr-4" alt={title} />
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
};

export default function TestimonialSlider() {
  const testimonials: TestimonialProps[] = [
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc:  testi1,
    },
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc: testi2,
    },
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc: testi3,
    },
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc: testi1,
    },
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc: testi2,
    },
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc: testi3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Customers Love Us</h2>
        </div>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}