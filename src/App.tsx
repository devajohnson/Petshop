import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import PetDetail from './pages/PetDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { FilterOptions } from './types/Pet';

type PageType = 'HOME' | 'BROWSE' | 'ABOUT' | 'CONTACT' | 'PET_DETAIL';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('HOME');
  const [viewHistory, setViewHistory] = useState<PageType[]>([]);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);
  const [browseFilters, setBrowseFilters] = useState<FilterOptions>({
    type: 'all',
    breed: '',
    minAge: 0,
    maxAge: 100,
    minPrice: 0,
    maxPrice: 10000,
    location: '',
  });

  const navigateTo = (page: PageType) => {
    if (page !== currentPage) {
      setViewHistory([...viewHistory, currentPage]);
      setCurrentPage(page);
    }
  };

  const goBack = () => {
    if (viewHistory.length > 0) {
      const previousPage = viewHistory[viewHistory.length - 1];
      setViewHistory(viewHistory.slice(0, -1));
      setCurrentPage(previousPage);
    }
  };

  const handleSelectPet = (petId: string) => {
    setSelectedPetId(petId);
    navigateTo('PET_DETAIL');
  };

  const handleFilterChange = (filters: FilterOptions) => {
    setBrowseFilters(filters);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={navigateTo} onSelectPet={handleSelectPet} />;
      case 'BROWSE':
        return (
          <Browse
            filters={browseFilters}
            onFilterChange={handleFilterChange}
            onSelectPet={handleSelectPet}
          />
        );
      case 'PET_DETAIL':
        return (
          <PetDetail petId={selectedPetId} onBack={goBack} onNavigate={navigateTo} />
        );
      case 'ABOUT':
        return <About onNavigate={navigateTo} />;
      case 'CONTACT':
        return <Contact onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} onSelectPet={handleSelectPet} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;