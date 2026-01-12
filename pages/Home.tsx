
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1F2A36] mb-6 leading-tight">
              Perfectie in elke <br /> <span className="text-[#1F2A36]/80">penseelstreek.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kestens Afwerking is gespecialiseerd in hoogwaardige binnenschilderwerken, buitenschilderwerken en renovaties voor particulieren. Wij staan garant voor een professionele en betrouwbare afwerking van uw woning.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/diensten"
                className="inline-block bg-[#1F2A36] text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#2c3d4e] transition-colors"
              >
                Onze Diensten
              </Link>
              <Link
                to="/contact"
                className="inline-block border border-[#1F2A36] text-[#1F2A36] px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#1F2A36] hover:text-white transition-colors"
              >
                Contacteer ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/id/1/800/600" 
                alt="Schilderwerken" 
                className="rounded-sm shadow-sm border border-[#E6E6E6]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1F2A36] mb-6 uppercase tracking-tight">Vakmanschap & Betrouwbaarheid</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bij Kestens Afwerking begrijpen we dat uw huis meer is dan alleen een gebouw. Het is een plek waar u zich thuis moet voelen. Daarom besteden wij de grootste zorg aan de afwerking van uw interieur en exterieur.
              </p>
              <ul className="space-y-4">
                {[
                  "Focus op schilderwerken en renovatie",
                  "Hoogwaardige materialen",
                  "Persoonlijk advies op maat",
                  "Nette en stipte uitvoering"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <svg className="h-5 w-5 text-[#1F2A36] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#1F2A36] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl italic font-light leading-relaxed">
            "Wij streven naar een resultaat dat de tand des tijds doorstaat, met oog voor de kleinste details en een passie voor het vak."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
