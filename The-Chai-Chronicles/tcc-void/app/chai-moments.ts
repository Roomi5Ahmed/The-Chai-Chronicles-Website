export interface ChaiMoment {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string; // Optional link to a blog post or recipe
}

export const chaiMoments: ChaiMoment[] = [
  {
    id: 1,
    title: 'Chai with Family',
    description: 'Sharing a cup of chai with loved ones is a timeless tradition.',
    image: '/coffee.png',
  },
  {
    id: 2,
    title: 'Chai on the Train',
    description: 'Enjoying a hot cup of chai during a train journey across India.',
    image: '/kulhad.png',
  },
  {
    id: 3,
    title: 'Chai at a Hill Station',
    description: 'Sipping chai amidst the serene beauty of a hill station.',
    image: '/greentea.png',
  },
  {
    id: 4,
    title: 'Chai during a Rainy Day',
    description: 'There is nothing better than the rain, a book, and chai.',
    image: '/coffee-bed.png',
  },
  {
    id: 5,
    title: 'Chai Break at College Canteen',
    description: 'Sharing chai and stories with friends during a break at the college canteen.',
    image: '/file.svg',
  },
];