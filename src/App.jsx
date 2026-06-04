import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));

function PageLoader() {
  return (
    <div className="page-loader" aria-label="Loading">
      <span className="btn-spinner" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="products"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductsPage />
              </Suspense>
            }
          />
          <Route
            path="products/:productId"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetailsPage />
              </Suspense>
            }
          />
          <Route
            path="categories"
            element={
              <Suspense fallback={<PageLoader />}>
                <CategoriesPage />
              </Suspense>
            }
          />
          <Route
            path="categories/:categoryId"
            element={
              <Suspense fallback={<PageLoader />}>
                <CategoryPage />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<PageLoader />}>
                <CartPage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<PageLoader />}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<PageLoader />}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="forgot-password"
            element={
              <Suspense fallback={<PageLoader />}>
                <ForgotPasswordPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="privacy"
            element={
              <Suspense fallback={<PageLoader />}>
                <LegalPage />
              </Suspense>
            }
          />
          <Route
            path="terms"
            element={
              <Suspense fallback={<PageLoader />}>
                <LegalPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
