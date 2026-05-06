import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { pets } from '../data/pets';
import { FilterOptions } from '../types/Pet';
import PetCard from '../components/PetCard';
import FilterBar from '../components/FilterBar';

interface BrowseProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onSelectPet: (petId: string) => void;
}

const Browse: React.FC<BrowseProps> = ({ filters, onFilterChange, onSelectPet }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const petsPerPage = 12;

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesSearch = searchQuery === '' || 
        pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pet.type.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = filters.type === 'all' || pet.type === filters.type;
      const matchesBreed = filters.breed === '' || pet.breed === filters.breed;
      const matchesAge = pet.age >= filters.minAge && pet.age <= filters.maxAge;
      const matchesPrice = pet.price >= filters.minPrice && pet.price <= filters.maxPrice;

      return matchesSearch && matchesType && matchesBreed && matchesAge && matchesPrice;
    });
  }, [searchQuery, filters]);

  const totalPages = Math.ceil(filteredPets.length / petsPerPage);
  const startIndex = (currentPage - 1) * petsPerPage;
  const paginatedPets = filteredPets.slice(startIndex, startIndex + petsPerPage);

  const handleFilterChange = (newFilters: FilterOptions) => {
    onFilterChange(newFilters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    const clearedFilters: FilterOptions = {
      type: 'all',
      breed: '',
      minAge: 0,
      maxAge: 100,
      minPrice: 0,
      maxPrice: 10000,
      location: '',
    };
    onFilterChange(clearedFilters);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Pets</h1>
            <p className="text-lg text-gray-600">Find your perfect companion</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, breed, or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        isOpen={isFilterOpen}
        onToggle={() => setIsFilterOpen(!isFilterOpen)}
      />

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {startIndex + 1}-{Math.min(startIndex + petsPerPage, filteredPets.length)} of {filteredPets.length} pets
          </p>
        </div>

        {/* Pet Grid */}
        {paginatedPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} onSelectPet={onSelectPet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No pets found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <button
              onClick={handleClearFilters}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;