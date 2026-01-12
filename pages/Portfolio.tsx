
import React from 'react';

const Portfolio: React.FC = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-[#1F2A36] mb-4 uppercase tracking-tighter">Realisaties</h1>
          <div className="w-20 h-1 bg-[#1F2A36]"></div>
          <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
            Bekijk hier een selectie van onze recente projecten. Binnenkort worden hier foto's van onze realisaties geplaatst.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholders.map((_, index) => (
            <div key={index} className="group relative">
              <div className="aspect-w-16 aspect-h-9 bg-[#E6E6E6] rounded-sm overflow-hidden flex items-center justify-center h-64 border border-gray-200">
                <span className="text-gray-400 font-medium italic">Project Foto Placeholder</span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#1F2A36] uppercase tracking-wide">Project {index + 1}</h3>
                <p className="text-sm text-gray-500">Beschrijving van de werken komt hier.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#E6E6E6] rounded-sm text-center">
          <h3 className="text-xl font-bold text-[#1F2A36] mb-4">Interesse in een samenwerking?</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Heeft u een project in gedachten? Neem contact met ons op voor een vrijblijvende offerte.
          </p>
          <a href="#/contact" className="inline-block bg-[#1F2A36] text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#2c3d4e] transition-colors">
            Vraag een offerte aan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
