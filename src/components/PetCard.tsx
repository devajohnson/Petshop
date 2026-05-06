import React from 'react';
import { MapPin, Heart, Calendar } from 'lucide-react';
import { Pet } from '../types/Pet';

interface PetCardProps {
  pet: Pet;
  onSelectPet: (petId: string) => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onSelectPet }) => {
  return (
    <div className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden cursor-pointer">
          <img
            src={pet.images[0]}
            alt={pet.name}
            onClick={() => onSelectPet(pet.id)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {pet.featured && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
          <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 
              className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors cursor-pointer"
              onClick={() => onSelectPet(pet.id)}
            >
              {pet.name}
            </h3>
            <div className="flex items-center text-green-600 font-bold">
              <span>Rs {pet.price.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-3 capitalize">{pet.breed} • {pet.type}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{pet.age} {pet.age === 1 ? 'year' : 'years'} old</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{pet.location}</span>
            </div>
          </div>

          {/* Health Status */}
          <div className="flex flex-wrap gap-2 mb-4">
            {pet.vaccinated && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Vaccinated
              </span>
            )}
            {pet.neutered && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Neutered
              </span>
            )}
          </div>

          <button 
            onClick={() => onSelectPet(pet.id)}
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;