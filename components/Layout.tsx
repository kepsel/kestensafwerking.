
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/diensten', label: 'Diensten' },
    { path: '/realisaties', label: 'Realisaties' },
    { path: '/contact', label: 'Contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-[#E6E6E6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                {/* Logo Placeholder as per instructions */}
                <div className="h-12 w-auto flex items-center">
                   <span className="text-[#1F2A36] font-bold text-2xl tracking-tighter uppercase">
                     Kestens <span className="font-light">Afwerking</span>
                   </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-[#1F2A36] border-b-2 border-[#1F2A36]'
                      : 'text-gray-500 hover:text-[#1F2A36]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - simple representation */}
            <div className="md:hidden">
               <button className="text-[#1F2A36] p-2">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                 </svg>
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1F2A36] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Kestens Afwerking</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Uw partner voor hoogwaardige schilderwerken en totaalrenovaties. 
                Vakmanschap en oog voor detail staan bij ons centraal.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigatie</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Telefoon: +32 473 12 63 02</li>
                <li>E-mail: info@kestensafwerking.be</li>
                <li>Instagram: @kestensafwerking</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-500 uppercase tracking-widest">
            &copy; {currentYear} Kestens Afwerking. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
