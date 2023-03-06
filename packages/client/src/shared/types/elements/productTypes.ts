export type ProductRatings = 1 | 2 | 3 | 4 | 5

export const ProductTypes = ['Electronics',
  'Clothes', 'Shoes', 'Children products',
  'Sports and recreation', 'Food'] as const

export const ProductModels =
    ['Latest', 'New',
      'Slightly old', 'Outdated'] as const

export const ProductSizes = ['Very little', 'Small', 'Medium', 'Massive', 'Large', 'Epic'] as const

export const ProductFeatures = ['Adaptable', 'Accomplished', 'Amazing', 'Amusing',
  'Charming', 'Creative', 'Courteous', 'Funny', 'Elegant', 'Inventive', 'Small',
  'Doesn\'t bother', 'Quiet', 'Relaxed', 'Reliable', 'Sleek', 'Technological', 'Inspiring',
  'Beautiful', 'Colorful', 'Enchanted', 'Magical', 'Incredible', 'Luxurious', 'Nostalgic',
  'Comfortable', 'Convenient', 'Fast', 'Rapid', 'Flexible', 'Responsive', 'Shiny']
