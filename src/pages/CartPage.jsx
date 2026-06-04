import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function CartPage() {
  const {
    items,
    subtotal,
    deliveryFee,
    total,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      <SEO
        title="Shopping Cart"
        description="Review your FreshCart order, update quantities, and proceed to checkout."
        path="/cart"
      />
      <main className="page-main">
        <section className="page-hero section-sm">
          <div className="container">
            <p className="eyebrow">Cart</p>
            <h1>Your shopping cart.</h1>
          </div>
        </section>

        <section className="section">
          <div className="container cart-layout">
            {items.length === 0 ? (
              <div className="empty-cart glass-panel">
                <p>Your cart is empty.</p>
                <Button to="/products">Start Shopping</Button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map((item) => (
                    <article key={item.id} className="cart-item glass-card">
                      <Link to={`/products/${item.id}`} className="cart-item-image">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          loading="lazy"
                          width={100}
                          height={80}
                        />
                      </Link>
                      <div className="cart-item-details">
                        <Link to={`/products/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
                        <p>{formatPrice(item.price)} each</p>
                        <div className="qty-controls">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-actions">
                        <strong>
                          {formatPrice(item.price * item.quantity)}
                        </strong>
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                <aside className="cart-summary glass-panel">
                  <h2>Order Summary</h2>
                  <dl>
                    <div>
                      <dt>Subtotal</dt>
                      <dd>{formatPrice(subtotal)}</dd>
                    </div>
                    <div>
                      <dt>Delivery fee</dt>
                      <dd>
                        {deliveryFee === 0
                          ? 'Free'
                          : formatPrice(deliveryFee)}
                      </dd>
                    </div>
                    {subtotal > 0 && subtotal < 50 && (
                      <p className="free-delivery-hint">
                        Add {formatPrice(50 - subtotal)} more for free delivery!
                      </p>
                    )}
                    <div className="cart-total">
                      <dt>Total</dt>
                      <dd>{formatPrice(total)}</dd>
                    </div>
                  </dl>
                  <Button size="lg" className="checkout-btn">
                    Proceed to Checkout
                  </Button>
                  <Link to="/products" className="continue-link">
                    Continue shopping
                  </Link>
                </aside>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
