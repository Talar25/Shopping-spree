//importing compontents
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ProductComponent } from './ProductComponent';
//importing hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//importing types
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { RecommendedItems } from './RecommendedItems';
import Authors from '../../components/Authors/Authors';

const ProductPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <ProductComponent />
      <ProductDescription />
      <RecommendedItems />
      <Footer />
      <Authors />
    </>
  );
};

export default ProductPage;
