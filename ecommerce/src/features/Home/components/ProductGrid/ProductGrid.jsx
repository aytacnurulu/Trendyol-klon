import  useProduct  from "../../../../shared/hooks/useProduct";
import ProductCard from "../../../../shared/components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
  const { sortedProducts, loading, error } = useProduct();

  if (loading) {
    return (
      <div className={styles.state}>
        <div className={styles.skeletonGrid}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.skeleton} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state}>
        <i className="ti ti-alert-circle" style={{ fontSize: 32, color: "#ef4444" }} aria-hidden="true" />
        <p className={styles.stateText}>Something went wrong. Please try again.</p>
      </div>
    );
  }

  if (!sortedProducts?.length) {
    return (
      <div className={styles.state}>
        <i className="ti ti-mood-empty" style={{ fontSize: 40, color: "#9ca3af" }} aria-hidden="true" />
        <p className={styles.stateText}>No products found.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}