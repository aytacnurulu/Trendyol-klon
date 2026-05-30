import {
  IconHeartOff,
  IconHeart,
  IconShoppingBag,
  IconTrash,
} from "@tabler/icons-react";
import useWishlist from "../../../shared/hooks/useWishlist";
import MainLayout from "../../../shared/Layout/MainLayout/MainLayout";
import styles from "./WishlistPage.module.css";
import ProductCard from "../../../shared/components/ProductCard/ProductCard";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  // wishlistItems are full product objects — no need for useProduct here
  return (
    <MainLayout>
      <div className={styles.page}>
        {/* ── Hero Header ── */}
        {/* <header className={styles.hero}>
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
        </header> */}

        {/* ── Empty State ── */}
        {wishlistItems.length === 0 && (
          <div className={styles.emptyWrap}>
            <div className={styles.emptyIllustration}>
              <IconHeart
                size={64}
                strokeWidth={0.8}
                className={styles.emptyHeartBg}
              />
              <IconHeartOff
                size={36}
                strokeWidth={1.5}
                className={styles.emptyHeartFg}
              />
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
        {wishlistItems.length > 0 && (
          <>
            <div className={styles.toolbar}>
              <span className={styles.toolbarCount}>
                {wishlistItems.length} saved item
                {wishlistItems.length > 1 ? "s" : ""}
              </span>
            </div>

            <div className={styles.grid}>
              {wishlistItems.map((product, idx) => (
                <div
                  key={product.id}
                  className={styles.cardWrap}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <ProductCard product={product} />
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
