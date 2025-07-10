export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  slug: string; // Unique identifier for the post URL
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Brewing Perfect Chai',
    author: 'Anya Sharma',
    date: '2025-07-05',
    content: 'Discover the secrets to brewing the perfect cup of chai at home. From selecting the right tea leaves to mastering the art of spice blending, this guide will elevate your chai-making skills.',
    image: '/coffee.png',
    slug: 'the-art-of-brewing-perfect-chai',
  },
  {
    id: 2,
    title: 'Chai Across India: A Regional Journey',
    author: 'Vikram Patel',
    date: '2025-07-01',
    content: 'Embark on a flavorful journey across India and explore the diverse regional variations of chai. From the spicy Cutting Chai of Mumbai to the creamy Irani Chai of Hyderabad, each region offers a unique chai experience.',
    image: '/greentea.png',
    slug: 'chai-across-india-a-regional-journey',
  },
  {
    id: 3,
    title: 'The Health Benefits of Chai',
    author: 'Priya Kapoor',
    date: '2025-06-25',
    content: 'Uncover the surprising health benefits of chai, from its antioxidant properties to its ability to boost energy and improve digestion. Learn how to incorporate chai into your daily routine for a healthier lifestyle.',
    image: '/coffee-bed.png',
    slug: 'the-health-benefits-of-chai',
  },
];