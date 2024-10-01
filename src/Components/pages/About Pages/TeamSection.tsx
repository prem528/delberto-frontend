import React from 'react';
import { Linkedin } from 'lucide-react';
import prateek from '../../../assets/img/prateek.jpg'
import Shammi from '../../../assets/img/SHAMMI-MOZA.webp'
import Pragya  from '../../../assets/img/PragyaSingh.jpg'
import team from '../../../assets/img/team.png'

const TeamSection: React.FC = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className='flex justify-center'>
          <img src={team} alt='team' className="w-full h-auto max-w-screen-lg" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Prateek Ojha", image: prateek, linkedin: "https://www.linkedin.com/in/prateek-ojha-48893143" },
            { name: "Shammi Moza", image: Shammi, linkedin: "https://www.linkedin.com/in/shammi-moza-689b4015" },
            { name: "Pragya Singh", image: Pragya, linkedin: "https://www.linkedin.com/in/pragya-singh-6a251119" }
          ].map((member, index) => (
            <div key={index} className="w-full sm:w-64 text-center">
              <div className="relative mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto object-cover"
                />
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 bg-white p-2 rounded-full">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;