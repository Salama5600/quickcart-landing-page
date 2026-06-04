import { SORT_OPTIONS } from '../../utils/productFilters';

export default function ProductFilters({
  sort,
  onSortChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) {
  return (
    <div className="product-filters glass-panel">
      <div className="filter-group">
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="minPrice">Min price</label>
        <input
          id="minPrice"
          type="number"
          min="0"
          step="0.01"
          placeholder="$0"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="maxPrice">Max price</label>
        <input
          id="maxPrice"
          type="number"
          min="0"
          step="0.01"
          placeholder="$50+"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
        />
      </div>
    </div>
  );
}
