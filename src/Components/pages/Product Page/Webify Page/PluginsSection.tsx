 
import logo1 from '../../../../assets/img/logo1.svg'
import logo2 from '../../../../assets/img/logo2.svg'
import logo3 from '../../../../assets/img/logo3.svg'
import logo4 from '../../../../assets/img/logo4.svg'
import logo5 from '../../../../assets/img/logo5.svg'
import logo6 from '../../../../assets/img/logo6.svg'
import logo7 from '../../../../assets/img/logo7.svg'
import logo8 from '../../../../assets/img/logo8.svg'
import logo9 from '../../../../assets/img/logo9.svg'
import logo10 from '../../../../assets/img/logo10.svg'

interface LogoImage {
  src: string;
  alt: string;
}

const logoImages: LogoImage[] = [
  { src: logo1, alt: "Plugin Logo 1" },
  { src: logo2, alt: "Plugin Logo 2" },
  { src: logo3, alt: "Plugin Logo 3" },
  { src: logo4, alt: "Plugin Logo 4" },
  { src: logo5, alt: "Plugin Logo 5" },
  { src: logo6, alt: "Plugin Logo 6" },
  { src: logo7, alt: "Plugin Logo 7" },
  { src: logo8, alt: "Plugin Logo 8" },
  { src: logo9, alt: "Plugin Logo 9" },
  { src: logo10, alt: "Plugin Logo 10" },
];

export default function PluginsSection() {
  return (
    <section className="bg-[#5ca7e1] py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Add more functionality to your site with plug-ins
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
          Pick from a range of 20+ plug-ins. Whether it's tracking analytics, managing shipments, or building email lists, we have a plug-in for it all.
        </p>
        <div className="flex justify-center items-center space-x-8 mb-12 overflow-x-auto py-4">
          {logoImages.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                width={80}
                height={48}
                className="object-contain hover:scale-110 hover:shadow-md transition-all duration-300 ease-in-ou" 
              />
            </div>
          ))}
        </div>
        <a 
          href="#get-started" 
          className="inline-block bg-white text-[#5ca7e1] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Get started for free →
        </a>
      </div>
    </section>
  );
}