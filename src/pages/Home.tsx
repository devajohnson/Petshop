import React from 'react';
import { ArrowRight, Heart, Shield, Users, Award } from 'lucide-react';
import { pets } from '../data/pets';
import PetCard from '../components/PetCard';

type PageType = 'HOME' | 'BROWSE' | 'ABOUT' | 'CONTACT' | 'PET_DETAIL';

interface HomeProps {
  onNavigate: (page: PageType) => void;
  onSelectPet: (petId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectPet }) => {
  const featuredPets = pets.filter((pet) => pet.featured).slice(0, 4);

  const features = [
    {
      icon: Heart,
      title: 'Ethical Breeding',
      description: 'We work only with certified, ethical breeders who prioritize animal welfare.',
    },
    {
      icon: Shield,
      title: 'Health Guaranteed',
      description: 'All pets come with health certificates and vaccination records.',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support team to help you find your perfect companion.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every pet is thoroughly vetted before being listed on our platform.',
    },
  ];

  const petTypeFilters = [
    { type: 'dog', label: 'Dogs', image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'cat', label: 'Cats', image: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'bird', label: 'Birds', image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'rabbit', label: 'Rabbits', image: 'https://images.pexels.com/photos/6069593/pexels-photo-6069593.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Perfect
                <span className="text-teal-600 block">Furry Friend</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Connect with loving pets looking for their forever homes. Browse our carefully curated selection of dogs, cats, birds, and more from trusted breeders.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('BROWSE')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Browse Pets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => onNavigate('ABOUT')}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Happy dog"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <img
                    src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cute cat"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/6069593/pexels-photo-6069593.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Rabbit"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <img
                    src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Colorful bird"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Type Quick Filters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Pet Type</h2>
            <p className="text-lg text-gray-600">Find the perfect companion for your lifestyle</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {petTypeFilters.map((filter) => (
              <button
                key={filter.type}
                onClick={() => onNavigate('BROWSE')}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square">
                  <img
                    src={filter.image}
                    alt={filter.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{filter.label}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Pets</h2>
            <p className="text-lg text-gray-600">These special pets are looking for loving homes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} onSelectPet={onSelectPet} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('BROWSE')}
              className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              View All Pets
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PawPals?</h2>
            <p className="text-lg text-gray-600">We're committed to connecting pets with loving families</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your New Best Friend?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Browse our selection of loving pets waiting for their forever homes
          </p>
          <button
            onClick={() => onNavigate('BROWSE')}
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Browsing
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;