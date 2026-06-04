export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'name', label: 'Name A–Z' },
];

export function filterAndSortProducts(products, { sort, minPrice, maxPrice }) {
  let result = [...products];

  if (minPrice != null && minPrice !== '') {
    result = result.filter((p) => p.price >= Number(minPrice));
  }
  if (maxPrice != null && maxPrice !== '') {
    result = result.filter((p) => p.price <= Number(maxPrice));
  }

  switch (sort) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return result;
}
