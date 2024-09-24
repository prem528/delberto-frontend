import React from 'react';

interface FeaturesSectionProps {
  quote: string;
  name: string;
  imageSrc1: string;
  imageSrc2: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ quote, name, imageSrc1, imageSrc2 }) => {
  return (
    <section id="features" className="features section app-sec">
      <div className="container">
        <div className="row gy-5 justify-content-center">
          <div className="col-md-5" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box content">
              <p>{quote}</p>
              <div className="text-center text-lg-start">
                <div className="abt icon-box">
                  <img src="/placeholder.svg?height=50&width=50" className="img-fluid" alt={name} />
                  <div>
                    <h4>{name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="d-flex align-items-center">
              <div className="icon d-flex" style={{ flexDirection: 'column' }}>
                <img src={imageSrc1} className="img-fluid pb-3" style={{ width: '350px' }} alt="Feature 1" />
                <img src={imageSrc2} className="img-fluid" style={{ width: '350px' }} alt="Feature 2" />
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
    <FeaturesSection
      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
      name="Caroline Campbel"
      imageSrc1="/placeholder.svg?height=350&width=350"
      imageSrc2="/placeholder.svg?height=350&width=350"
    />
  );
}