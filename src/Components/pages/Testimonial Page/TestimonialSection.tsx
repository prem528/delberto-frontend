import React from 'react';

interface TestimonialSectionProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ quote, name, title, imageSrc }) => {
  return (
    <section id="about" className="test-pin section test" style={{ padding: 0 }}>
      <div className="container" data-aos="fade-up">
        <div className="row gx-0 justify-content-center">
          <div className="col-lg-8 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
            <div className="content ps-4">
              <img src="/placeholder.svg?height=50&width=50" className="img-fluid" alt="Pin" />
              <p>{quote}</p>
              <div className="text-center text-lg-start">
                <div className="abt icon-box">
                  <img src={imageSrc} className="img-fluid" alt={name} />
                  <div>
                    <h4>{name}</h4>
                    <h6>{title}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Component() {
  return (
    <TestimonialSection
      quote="Having an all-in-one solution, compared to siloed info, ensures teams can better understand action OKRs and work transparently across the business."
      name="Naveen Gavini"
      title="SVP of Products at Pinterest"
      imageSrc="/placeholder.svg?height=100&width=100"
    />
  );
}