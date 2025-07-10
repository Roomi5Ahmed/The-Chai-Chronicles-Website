export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Masala Chai Blend',
    description: 'A traditional blend of black tea and aromatic Indian spices.',
    price: 350,
    image: '/coffee.png',
  },
  {
    id: 2,
    name: 'Ginger Chai Blend',
    description: 'A warming blend of black tea and ginger.',
    price: 300,
    image: '/greentea.png',
  },
  {
    id: 3,
    name: 'Cardamom Chai Blend',
    description: 'An elegant blend of black tea and fragrant cardamom.',
    price: 400,
    image: '/coffee-bed.png',
  },
];