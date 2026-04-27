export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'bird' | 'rabbit' | 'exotic';
  breed: string;
  age: number;
  price: number;
  location: string;
  images: string[];
  description: string;
  vaccinated: boolean;
  neutered: boolean;
  gender: 'male' | 'female';
  weight: string;
  temperament: string[];
  sellerName: string;
  sellerPhone: string;
  sellerEmail: string;
  featured: boolean;
}

export interface FilterOptions {
  type: string;
  breed: string;
  minAge: number;
  maxAge: number;
  minPrice: number;
  maxPrice: number;
  location: string;
}