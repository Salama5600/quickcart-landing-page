export default function StarRating({ rating, size = 'md', showValue = true }) {
  const stars = [1, 2, 3, 4, 5];
  const sizeClass = size === 'sm' ? 'stars-sm' : size === 'lg' ? 'stars-lg' : '';

  return (
    <div className={`stars ${sizeClass}`} aria-label={`${rating} out of 5 stars`}>
      {stars.map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? 'star filled' : 'star'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
      {showValue && <span className="stars-value">{rating.toFixed(1)}</span>}
    </div>
  );
}
