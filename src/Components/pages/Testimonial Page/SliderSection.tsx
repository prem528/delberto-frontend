import React from 'react';

interface TestimonialProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="item testi_bg">
      <div className="row gx-0 justify-content-center s_rev">
        <div className="col-lg-6 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
          <div className="content">
            <h4>{title}</h4>
            <p>{description}</p>
            <a href="#" className="buy-btn">Read Case Study</a>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center text-lg-start">
            <div className="abt testi_img">
              <img src={imageSrc} className="img-fluid" alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      title: 'How Thyme Care increased hiring spend by 35%',
      description: 'Having an all-in-one solution, compared to siloed info, ensures teams can better understand.',
      imageSrc: '/placeholder.svg?height=300&width=300',
    },
    {
      title: 'TechCorp boosts productivity with AI integration',
      description: 'Implementing AI solutions led to a 50% increase in team efficiency and output quality.',
      imageSrc: '/placeholder.svg?height=300&width=300',
    },
  ];

  return (
    <section id="slider" className="slider section price">
      <div className="container">
        <div className="row tb default-margin-bottom theme-blue">
          <div className="col-md-9 col-sm-8">
            <div className="section-title">
              <h2 className="title">Our Customers <br />Love Us </h2>
            </div>
          </div>
          <div className="col-md-3 block-navigation-area hidden-xs tb-cell">
            <div className="item-navigation nav-right">
              <a href="#" className="previous-item"><i className="bi bi-arrow-left"></i></a>
              <a href="#" className="next-item"><i className="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="priceing-slider slider-style-two owl-carousel" data-item="[3,2,2,1]">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Component() {
  return <SliderSection />;
}