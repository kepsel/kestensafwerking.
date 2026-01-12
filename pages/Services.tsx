
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Binnenschilderwerken",
      description: "Van muren en plafonds tot deuren en plinten. Wij zorgen voor een vlekkeloze afwerking van uw interieur met oog voor kleurharmonie.",
      img: "https://picsum.photos/id/20/800/500"
    },
    {
      title: "Buitenschilderwerken",
      description: "Bescherming en verfraaiing van uw gevel, ramen en deuren. Wij gebruiken weersbestendige producten voor een duurzaam resultaat.",
      img: "https://picsum.photos/id/21/800/500"
    },
    {
      title: "Renovatiewerken",
      description: "Totaalrenovaties of gedeeltelijke opfrissing. Wij coördineren uw project van begin tot eind voor een zorgeloos verloop.",
      img: "https://picsum.photos/id/22/800/500"
    },
    {
      title: "Afwerking van muren en plafonds",
      description: "Plamuren, schuren en voorbereiden. Een goede ondergrond is cruciaal voor een perfect eindresultaat.",
      img: "https://picsum.photos/id/23/800/500"
    },
    {
      title: "Herstellingen en opfriswerken",
      description: "Kleine beschadigingen of gewoon een nieuwe look? Wij voeren ook herstellingen uit om uw woning weer als nieuw te laten ogen.",
      img: "https://picsum.photos/id/24/800/500"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#1F2A36] mb-4 uppercase tracking-tighter">Onze Diensten</h1>
          <div className="w-20 h-1 bg-[#1F2A36]"></div>
          <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
            Kestens Afwerking biedt een breed scala aan diensten aan om uw woning volledig naar wens af te werken. Ontdek hieronder wat wij voor u kunnen betekenen.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="rounded-sm w-full h-[400px] object-cover shadow-sm border border-[#E6E6E6]"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-[#1F2A36] mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-sm font-bold text-[#1F2A36] uppercase tracking-widest border-b-2 border-[#1F2A36] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                  Meer informatie
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
