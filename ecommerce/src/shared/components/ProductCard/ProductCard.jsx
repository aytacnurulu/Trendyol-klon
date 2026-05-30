import styles from "./ProductCard.module.css";
import {
  IconHeart,
  IconHeartFilled,
  IconTruck,
  IconStar,
  IconStarFilled,
  IconShoppingCart,
  IconCircleCheck,
  IconCircleX,
} from "@tabler/icons-react";
import useWishlist from "../../hooks/useWishlist";

export default function ProductCard({ product }) {
  const {
    title,
    thumbnail,
    images,
    price,
    discountPercentage,
    rating,
    category,
    availabilityStatus,
    stock,
    reviews,
    shippingInformation,
    tags,
    weight,
  } = product;

  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  const filledStars = Math.round(rating);
  const reviewCount = reviews?.length ?? 0;
  const mainImage = thumbnail || images?.[0];

  const handleWishlistToggle = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product); // ✅ pass full product object
    }
  };

  return (
    <div className={styles.card}>
      {/* Image Area */}
      <div className={styles.imageArea}>
        <button
          className={`${styles.wishlistBtn} ${wishlisted ? styles.wishlistActive : ""}`}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={handleWishlistToggle}
        >
          {wishlisted ? <IconHeartFilled size={16} /> : <IconHeart size={16} />}
        </button>

        <img
          src={mainImage}
          alt={title}
          className={styles.image}
          loading="lazy"
        />

        {category && (
          <span className={styles.sideLabel}>{category.toUpperCase()}</span>
        )}

        {weight && (
          <span className={styles.weightTag}>
            {weight}
            <br />
            <span className={styles.weightUnit}>g</span>
          </span>
        )}
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        {shippingInformation && (
          <div className={styles.shipping}>
            <IconTruck size={13} />
            {shippingInformation}
          </div>
        )}

        {/* Stars */}
        <div className={styles.starsRow}>
          {Array.from({ length: 5 }).map((_, i) =>
            i < filledStars ? (
              <IconStarFilled
                key={i}
                size={13}
                className={styles.starFilled}
                aria-hidden="true"
              />
            ) : (
              <IconStar
                key={i}
                size={13}
                className={styles.star}
                aria-hidden="true"
              />
            ),
          )}
          <span className={styles.ratingVal}>{rating?.toFixed(1)}</span>
          <span className={styles.reviewCount}>({reviewCount})</span>
        </div>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className={styles.tagsRow}>
            <span className={styles.plusIcon}>+</span>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.priceSale}>${discountedPrice}</span>
          {discountPercentage > 0 && (
            <span className={styles.priceOriginal}>${price.toFixed(2)}</span>
          )}
          {discountPercentage > 0 && (
            <span className={styles.discountBadge}>
              -{Math.round(discountPercentage)}%
            </span>
          )}
        </div>

        {/* Availability */}
        <p
          className={`${styles.availability} ${
            availabilityStatus === "In Stock"
              ? styles.inStock
              : styles.outOfStock
          }`}
        >
          {availabilityStatus === "In Stock" ? (
            <IconCircleCheck size={13} aria-hidden="true" />
          ) : (
            <IconCircleX size={13} aria-hidden="true" />
          )}
          {availabilityStatus}
          {stock != null && availabilityStatus === "In Stock" && (
            <span className={styles.stockCount}> · {stock} left</span>
          )}
        </p>

        {/* CTA */}
        <button className={styles.cartBtn}>
          <IconShoppingCart size={16} aria-hidden="true" />
          Səbətə əlavə et
        </button>
      </div>
    </div>
  );
}
