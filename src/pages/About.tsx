import React from 'react';
import { Heart, Shield, Users, Award, CheckCircle } from 'lucide-react';

type PageType = 'HOME' | 'BROWSE' | 'ABOUT' | 'CONTACT' | 'PET_DETAIL';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Heart,
      title: 'Animal Welfare First',
      description: 'Every decision we make prioritizes the health, happiness, and well-being of the animals in our care.',
    },
    {
      icon: Shield,
      title: 'Ethical Breeding',
      description: 'We work exclusively with certified, responsible breeders who follow strict ethical guidelines.',
    },
    {
      icon: Users,
      title: 'Perfect Matches',
      description: 'We believe every pet deserves the right family, and every family deserves the perfect pet.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All pets are thoroughly health-checked and come with complete medical documentation.',
    },
  ];

  const commitments = [
    'Comprehensive health screenings for all pets',
    'Transparent breeding practices and documentation',
    'Ongoing support for new pet parents',
    'Ethical treatment standards for all animals',
    'Lifetime health guarantee for genetic conditions',
    'Educational resources for responsible pet ownership',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About PawPals</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about connecting loving families with their perfect pet companions through ethical, transparent, and caring practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, PawPals was created with a simple yet powerful mission: to ensure every pet finds a loving, permanent home while maintaining the highest standards of ethical breeding and animal welfare.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that bringing a pet into your family is one of life's most rewarding experiences. That's why we've built a platform that prioritizes transparency, quality, and the well-being of both pets and families.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of animal welfare experts, veterinarians, and pet enthusiasts work tirelessly to ensure that every pet listed on our platform comes from ethical sources and is ready to become a beloved family member.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy family with pets"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at PawPals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veterinarian with pets"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitments</h2>
              <p className="text-gray-600 mb-8">
                We've established comprehensive standards to ensure the highest quality care and ethical practices throughout our network.
              </p>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate animal lovers dedicated to making pet adoption better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dr. Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-teal-600 mb-2">Chief Veterinarian</p>
              <p className="text-gray-600 text-sm">
                15+ years of veterinary experience specializing in animal welfare and breeding practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-teal-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Animal advocate with a mission to revolutionize ethical pet adoption and breeding.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5327664/pexels-photo-5327664.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Emily Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Rodriguez</h3>
              <p className="text-teal-600 mb-2">Head of Animal Welfare</p>
              <p className="text-gray-600 text-sm">
                Certified animal behaviorist ensuring proper care standards and family matching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Pet?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of happy families who found their perfect companions through PawPals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('BROWSE')}
              className="inline-flex items-center px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Pets
            </button>
            <button
              onClick={() => onNavigate('CONTACT')}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;