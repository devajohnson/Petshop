import { Pet } from '../types/Pet';

export const pets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 2,
    price: 1200,
    location: 'New York, NY',
    images: [
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Luna is a gentle and loving Golden Retriever who loves playing fetch and swimming. She\'s great with children and other pets. Fully house trained and obedient.',
    vaccinated: true,
    neutered: false,
    gender: 'female',
    weight: '55 lbs',
    temperament: ['Friendly', 'Gentle', 'Playful'],
    sellerName: 'Sarah Johnson',
    sellerPhone: '(555) 123-4567',
    sellerEmail: 'sarah.johnson@email.com',
    featured: true
  },
  {
    id: '2',
    name: 'Whiskers',
    type: 'cat',
    breed: 'Persian',
    age: 1,
    price: 800,
    location: 'Los Angeles, CA',
    images: [
      'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful Persian cat with luxurious long fur. Very calm and affectionate. Perfect lap cat who loves to be pampered.',
    vaccinated: true,
    neutered: true,
    gender: 'male',
    weight: '8 lbs',
    temperament: ['Calm', 'Affectionate', 'Quiet'],
    sellerName: 'Mike Chen',
    sellerPhone: '(555) 987-6543',
    sellerEmail: 'mike.chen@email.com',
    featured: true
  },
  {
    id: '3',
    name: 'Charlie',
    type: 'bird',
    breed: 'Cockatiel',
    age: 3,
    price: 300,
    location: 'Chicago, IL',
    images: [
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638999/pexels-photo-1638999.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Charlie is a social and intelligent cockatiel who loves to whistle and can learn simple phrases. Very friendly and enjoys human interaction.',
    vaccinated: true,
    neutered: false,
    gender: 'male',
    weight: '3 oz',
    temperament: ['Social', 'Intelligent', 'Vocal'],
    sellerName: 'Emily Rodriguez',
    sellerPhone: '(555) 456-7890',
    sellerEmail: 'emily.rodriguez@email.com',
    featured: false
  },
  {
    id: '4',
    name: 'Bella',
    type: 'dog',
    breed: 'Labrador',
    age: 4,
    price: 950,
    location: 'Miami, FL',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Bella is an energetic Labrador who loves outdoor activities. Great family dog, excellent with kids and very loyal.',
    vaccinated: true,
    neutered: true,
    gender: 'female',
    weight: '65 lbs',
    temperament: ['Energetic', 'Loyal', 'Family-friendly'],
    sellerName: 'David Martinez',
    sellerPhone: '(555) 234-5678',
    sellerEmail: 'david.martinez@email.com',
    featured: true
  },
  {
    id: '5',
    name: 'Snowball',
    type: 'rabbit',
    breed: 'Holland Lop',
    age: 1,
    price: 150,
    location: 'Seattle, WA',
    images: [
      'https://images.pexels.com/photos/6069593/pexels-photo-6069593.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Adorable Holland Lop rabbit with soft white fur. Very gentle and perfect for families with children. Litter trained.',
    vaccinated: true,
    neutered: false,
    gender: 'female',
    weight: '3 lbs',
    temperament: ['Gentle', 'Quiet', 'Affectionate'],
    sellerName: 'Anna Thompson',
    sellerPhone: '(555) 345-6789',
    sellerEmail: 'anna.thompson@email.com',
    featured: false
  },
  {
    id: '6',
    name: 'Oliver',
    type: 'cat',
    breed: 'Maine Coon',
    age: 3,
    price: 1000,
    location: 'Boston, MA',
    images: [
      'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Majestic Maine Coon with a gentle giant personality. Very social and gets along well with other pets and children.',
    vaccinated: true,
    neutered: true,
    gender: 'male',
    weight: '15 lbs',
    temperament: ['Gentle', 'Social', 'Intelligent'],
    sellerName: 'Lisa Brown',
    sellerPhone: '(555) 567-8901',
    sellerEmail: 'lisa.brown@email.com',
    featured: true
  },
  {
    id: '7',
    name: 'Ziggy',
    type: 'exotic',
    breed: 'Bearded Dragon',
    age: 2,
    price: 250,
    location: 'Austin, TX',
    images: [
      'https://images.pexels.com/photos/5277693/pexels-photo-5277693.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Friendly bearded dragon that enjoys handling and interaction. Great starter reptile with calm temperament.',
    vaccinated: false,
    neutered: false,
    gender: 'male',
    weight: '1 lb',
    temperament: ['Calm', 'Docile', 'Easy-going'],
    sellerName: 'Tom Wilson',
    sellerPhone: '(555) 678-9012',
    sellerEmail: 'tom.wilson@email.com',
    featured: false
  },
  {
    id: '8',
    name: 'Ruby',
    type: 'bird',
    breed: 'Lovebird',
    age: 1,
    price: 180,
    location: 'Denver, CO',
    images: [
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Colorful and affectionate lovebird. Very social and bonds closely with their human family. Loves to play and explore.',
    vaccinated: true,
    neutered: false,
    gender: 'female',
    weight: '2 oz',
    temperament: ['Affectionate', 'Playful', 'Social'],
    sellerName: 'Rachel Green',
    sellerPhone: '(555) 789-0123',
    sellerEmail: 'rachel.green@email.com',
    featured: false
  }
];

export const petTypes = ['all', 'dog', 'cat', 'bird', 'rabbit', 'exotic'];

export const breeds = {
  dog: ['Golden Retriever', 'Labrador', 'German Shepherd', 'Bulldog', 'Poodle', 'Beagle'],
  cat: ['Persian', 'Maine Coon', 'Siamese', 'British Shorthair', 'Ragdoll', 'Bengal'],
  bird: ['Cockatiel', 'Lovebird', 'Budgie', 'Canary', 'Conure', 'Macaw'],
  rabbit: ['Holland Lop', 'Netherland Dwarf', 'Lionhead', 'Rex', 'Flemish Giant'],
  exotic: ['Bearded Dragon', 'Gecko', 'Snake', 'Turtle', 'Iguana', 'Ferret']
};