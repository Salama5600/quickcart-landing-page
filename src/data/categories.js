export const categories = [
  {
    id: 'fresh-produce',
    name: 'Fresh Produce',
    description: 'Farm-picked fruits and vegetables delivered daily.',
    icon: '🥬',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
  },
  {
    id: 'dairy-eggs',
    name: 'Dairy & Eggs',
    description: 'Premium milk, cheese, yogurt, and farm-fresh eggs.',
    icon: '🥛',
    image:
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80',
  },
  {
    id: 'bakery',
    name: 'Bakery',
    description: 'Artisan breads, pastries, and healthy baked options.',
    icon: '🍞',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
  },
  {
    id: 'pantry-staples',
    name: 'Pantry Staples',
    description: 'Rice, pasta, oils, sauces, and all kitchen essentials.',
    icon: '🫙',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Fresh juices, soft drinks, tea, coffee, and more.',
    icon: '🧃',
    image:
      'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80',
  },
  {
    id: 'household-care',
    name: 'Household Care',
    description: 'Cleaning and daily-use products for your home.',
    icon: '🧼',
    image:
      'https://images.unsplash.com/photo-1585421514284-efb74c269a1e?w=600&q=80',
  },
];

export const getCategoryById = (id) =>
  categories.find((c) => c.id === id) ?? null;
