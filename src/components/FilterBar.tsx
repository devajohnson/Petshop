import React from 'react';
import { FilterOptions } from '../types/Pet';
import { petTypes, breeds } from '../data/pets';
import { Filter, X } from 'lucide-react';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onToggle,
}) => {
  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const getAvailableBreeds = () => {
    if (filters.type === 'all' || !filters.type) return [];
    return breeds[filters.type as keyof typeof breeds] || [];
  };

  return (
    <div className="bg-white shadow-sm border-b">
      {/* Filter Toggle Button (Mobile) */}
      <div className="lg:hidden px-4 py-3 border-b">
        <button
          onClick={onToggle}
          className="flex items-center space-x-2 text-gray-700 hover:text-teal-600"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {/* Pet Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pet Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {petTypes.slice(1).map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}s
                  </option>
                ))}
              </select>
            </div>

            {/* Breed */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Breed
              </label>
              <select
                value={filters.breed}
                onChange={(e) => handleFilterChange('breed', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                disabled={filters.type === 'all' || !filters.type}
              >
                <option value="">All Breeds</option>
                {getAvailableBreeds().map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </div>

            {/* Age Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Age
              </label>
              <select
                value={filters.minAge}
                onChange={(e) => handleFilterChange('minAge', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value={0}>Any Age</option>
                {[1, 2, 3, 4, 5].map((age) => (
                  <option key={age} value={age}>
                    {age} year{age !== 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Age
              </label>
              <select
                value={filters.maxAge}
                onChange={(e) => handleFilterChange('maxAge', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value={100}>Any Age</option>
                {[1, 2, 3, 4, 5, 10].map((age) => (
                  <option key={age} value={age}>
                    {age} year{age !== 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Price
              </label>
              <select
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value={10000}>Any Price</option>
                <option value={500}>Under $500</option>
                <option value={1000}>Under $1,000</option>
                <option value={1500}>Under $1,500</option>
                <option value={2000}>Under $2,000</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={onClearFilters}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;