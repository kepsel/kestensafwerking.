
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#1F2A36] mb-4 uppercase tracking-tighter">Contacteer Ons</h1>
          <div className="w-20 h-1 bg-[#1F2A36] mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Heeft u vragen over onze diensten of wenst u een offerte voor uw project? Wij staan u graag te woord.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#E6E6E6] shadow-sm p-8 md:p-16 text-center">
            <h2 className="text-2xl font-bold text-[#1F2A36] mb-12 uppercase tracking-wide">Contactgegevens</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#E6E6E6] rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#1F2A36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1F2A36] mb-2">Telefoon</h3>
                <p className="text-gray-600">+32 473 12 63 02</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#E6E6E6] rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#1F2A36]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1F2A36] mb-2">E-mail</h3>
                <p className="text-gray-600">info@kestensafwerking.be</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#E6E6E6] rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#1F2A36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1F2A36] mb-2">Instagram</h3>
                <p className="text-gray-600">@kestensafwerking</p>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-[#E6E6E6]">
               <p className="text-sm text-gray-500 italic">
                 Wij zijn voornamelijk actief in de regio Antwerpen en omstreken.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
