import styles from "./ProductGrid.module.css";
import ProductCard from "../../../../shared/components/ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
