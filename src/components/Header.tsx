import React, { useState } from 'react';
import { Heart, Menu, X, Search } from 'lucide-react';

type PageType = 'HOME' | 'BROWSE' | 'ABOUT' | 'CONTACT' | 'PET_DETAIL';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', page: 'HOME' as PageType },
    { name: 'Browse Pets', page: 'BROWSE' as PageType },
    { name: 'About Us', page: 'ABOUT' as PageType },
    { name: 'Contact', page: 'CONTACT' as PageType },
  ];

  const isActive = (page: PageType) => currentPage === page;

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('HOME')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="bg-teal-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PawPals</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.page)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.page)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavigate('BROWSE')}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center space-x-2"
            >
              <Search className="h-4 w-4" />
              <span>Find Pets</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.page)}
                  className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.page)
                      ? 'text-teal-600 bg-teal-100'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('BROWSE')}
                className="w-full text-left block bg-teal-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 transition-colors mt-4"
              >
                Find Pets
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;