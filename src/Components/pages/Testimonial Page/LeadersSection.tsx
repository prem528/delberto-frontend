import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, imageSrc }) => {
  return (
    <div className="swiper-slide lead s_rev">
      <div className="col-lg-12 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
        <div className="content">
          <p>{quote}</p>
          <div className="text-center text-lg-start">
            <div className="abt icon-box">
              <img src={imageSrc} className="img-fluid" alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      quote: '"An incredible tool for content creation."',
      name: 'Jane Doe',
      title: 'CEO at TechCorp',
      imageSrc: '/placeholder.svg?height=50&width=50',
    },
  ];

  return (
    <section id="journey_bg" className="test section" style={{ background: '#f8f8f8' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Join leaders in content, <br /> marketing, and AI</h2>
      </div>
      <div className="row lead-padd justify-content-center" data-aos="zoom-in">
        <div className="swiper_bg">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper align-items-center">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Component() {
  return <LeadersSection />;
}