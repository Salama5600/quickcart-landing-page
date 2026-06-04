import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';
import StarRating from './StarRating';
import Button from './Button';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
      </Link>
      <div className="product-card-body">
        <Link to={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-card-meta">
          <StarRating rating={product.rating} size="sm" />
          <span className="product-price">{formatPrice(product.price)}</span>
        </div>
        <div className="product-card-actions">
          <Button size="sm" onClick={handleAdd}>
            Add to Cart
          </Button>
          <Button size="sm" variant="ghost" to={`/products/${product.id}`}>
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
