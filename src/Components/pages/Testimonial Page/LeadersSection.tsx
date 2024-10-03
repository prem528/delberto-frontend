import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clintimg from '../../../assets/img/client_4.png'

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <div className="px-4 h-full">
      <div className="bg-[#1a1d1e] rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 h-64 flex flex-col justify-between"> {/* Adjusted padding and height */}
        <div className="content flex flex-col justify-between h-full">
          <p className="text-white mb-4 text-sm sm:text-base md:text-lg line-clamp-4 flex-grow">{quote}</p>
          <div className="flex items-center mt-4">
            <img src={clintimg} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4" alt={name} />
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base">{name}</h4>
              <p className="text-white text-xs sm:text-sm">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Next testimonials"
    >
      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={onClick}
      aria-label="Previous testimonials"
    >
      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );
};

const LeadersSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
    {
      quote: '"It makes video editing much, much easier."',
      name: 'Kieran Flanagan',
      title: 'CMO at Zapier',
      imageSrc: '/placeholder.svg?height=50&width=50',
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
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
            Join leaders in content, <br className="hidden sm:inline" /> marketing, and AI
          </h2>
        </div>
        <div className="relative px-4 sm:px-0" data-aos="zoom-in">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default function Component() {
  return <LeadersSection />;
}