import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';

const CartContext = createContext(null);

const DELIVERY_FEE = 4.99;
const FREE_DELIVERY_THRESHOLD = 50;

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id
              ? { ...i, quantity: i.quantity + (action.quantity ?? 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.product, quantity: action.quantity ?? 1 },
        ],
      };
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      };
    case 'UPDATE_QUANTITY': {
      if (action.quantity < 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = useCallback((product, quantity = 1) => {
    dispatch({ type: 'ADD', product, quantity });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const cartCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );

  const deliveryFee =
    subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;

  const total = subtotal + deliveryFee;

  const value = useMemo(
    () => ({
      items: state.items,
      cartCount,
      subtotal,
      deliveryFee,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      state.items,
      cartCount,
      subtotal,
      deliveryFee,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
