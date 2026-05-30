import { IconHeartOff, IconHeart, IconShoppingBag, IconTrash } from "@tabler/icons-react";
import useWishlist from "../../../shared/hooks/useWishlist";
import useProduct from "../../../shared/hooks/useProduct";
import MainLayout from "../../../shared/Layout/MainLayout/MainLayout";
import styles from "./WishlistPage.module.css";
import ProductCard from "../../../shared/components/ProductCard/ProductCard";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { products, error, loading } = useProduct();

  const wishlistProducts = wishlistItems
    .map((id) => products?.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <MainLayout>
      <div className={styles.page}>

        {/* ── Hero Header ── */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroIcon}>
              <IconHeart size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className={styles.heroTitle}>Your Wishlist</h1>
              <p className={styles.heroSub}>
                {wishlistItems.length === 0
                  ? "Nothing saved yet"
                  : `${wishlistItems.length} item${wishlistItems.length > 1 ? "s" : ""} you love`}
              </p>
            </div>
          </div>
          {wishlistItems.length > 0 && (
            <div className={styles.heroBadge}>{wishlistItems.length}</div>
          )}
        </header>

        {/* ── States ── */}
        {loading && (
          <div className={styles.stateWrap}>
            <div className={styles.skeletonGrid}>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className={styles.skeleton}>
                  <div className={styles.skeletonImg} />
                  <div className={styles.skeletonLine} style={{ width: "80%" }} />
                  <div className={styles.skeletonLine} style={{ width: "55%" }} />
                  <div className={styles.skeletonLine} style={{ width: "40%" }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className={styles.stateWrap}>
            <div className={styles.errorBox}>
              <IconHeartOff size={40} strokeWidth={1.2} />
              <p>Couldn't load your wishlist. Please try again.</p>
            </div>
          </div>
        )}

        {!loading && !error && wishlistItems.length === 0 && (
          <div className={styles.emptyWrap}>
            <div className={styles.emptyIllustration}>
              <IconHeart size={64} strokeWidth={0.8} className={styles.emptyHeartBg} />
              <IconHeartOff size={36} strokeWidth={1.5} className={styles.emptyHeartFg} />
            </div>
            <h2 className={styles.emptyTitle}>Nothing saved yet</h2>
            <p className={styles.emptySub}>
              Browse products and tap the heart to save your favourites here.
            </p>
            <a href="/" className={styles.emptyBtn}>
              <IconShoppingBag size={16} />
              Start Shopping
            </a>
          </div>
        )}

        {/* ── Grid ── */}
        {!loading && !error && wishlistProducts.length > 0 && (
          <>
            <div className={styles.toolbar}>
              <span className={styles.toolbarCount}>
                {wishlistProducts.length} saved item{wishlistProducts.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className={styles.grid}>
              {wishlistProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className={styles.cardWrap}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <ProductCard
                    product={product}
                    inWishlist={true}
                    onClick={() => removeFromWishlist(product.id)}
                  />
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromWishlist(product.id)}
                    aria-label={`Remove ${product.title} from wishlist`}
                  >
                    <IconTrash size={14} />
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default WishlistPage;