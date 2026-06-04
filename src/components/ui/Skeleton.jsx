export function Skeleton({ className = '', style }) {
  return <div className={`skeleton ${className}`} style={style} aria-hidden="true" />;
}

export function ProductCardSkeleton() {
  return (
    <article className="product-card skeleton-card">
      <Skeleton className="skeleton-image" />
      <div className="skeleton-body">
        <Skeleton className="skeleton-line skeleton-line-lg" />
        <Skeleton className="skeleton-line skeleton-line-sm" />
        <Skeleton className="skeleton-line skeleton-line-md" />
        <div className="skeleton-actions">
          <Skeleton className="skeleton-btn" />
          <Skeleton className="skeleton-btn" />
        </div>
      </div>
    </article>
  );
}

export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="products-grid">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
