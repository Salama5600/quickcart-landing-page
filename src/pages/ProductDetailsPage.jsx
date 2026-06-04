import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  formatPrice,
  getProductById,
  getRelatedProducts,
} from '../data/products';
import { getCategoryById } from '../data/categories';
import { useCart } from '../context/CartContext';
import SEO from '../components/seo/SEO';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import NotFoundPage from './NotFoundPage';

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) return <NotFoundPage />;

  const category = getCategoryById(product.categoryId);
  const related = getRelatedProducts(product);

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0],
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        path={`/products/${product.id}`}
        type="product"
        jsonLd={productJsonLd}
      />
      <main className="page-main">
        <section className="section">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/products">Products</Link>
              <span>/</span>
              <Link to={`/categories/${product.categoryId}`}>
                {category?.name}
              </Link>
              <span>/</span>
              <span aria-current="page">{product.name}</span>
            </nav>

            <div className="product-detail-grid">
              <div className="product-gallery">
                <div className="gallery-main glass-card">
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    loading="eager"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="gallery-thumbs">
                    {product.images.map((img, i) => (
                      <button
                        key={img}
                        type="button"
                        className={i === activeImage ? 'active' : ''}
                        onClick={() => setActiveImage(i)}
                        aria-label={`View image ${i + 1}`}
                      >
                        <img src={img} alt="" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="product-detail-info">
                {product.badge && (
                  <span className="product-badge-lg">{product.badge}</span>
                )}
                <h1>{product.name}</h1>
                <StarRating rating={product.rating} size="lg" />
                <p className="review-count">{product.reviews} reviews</p>
                <p className="product-description">{product.description}</p>
                <div className="price-section glass-panel">
                  <span className="price-label">Price</span>
                  <strong className="price-large">
                    {formatPrice(product.price)}
                  </strong>
                </div>
                <div className="quantity-selector">
                  <label htmlFor="qty">Quantity</label>
                  <div className="qty-controls">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      id="qty"
                      type="number"
                      min="1"
                      max="99"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="product-detail-actions">
                  <Button onClick={handleAdd} size="lg">
                    Add to Cart
                  </Button>
                  <Button to="/cart" variant="ghost" size="lg">
                    Go to Cart
                  </Button>
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="related-products">
                <h2>Related Products</h2>
                <div className="products-grid">
                  {related.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
