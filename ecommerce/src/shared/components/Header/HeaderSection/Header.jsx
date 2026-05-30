import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from "react-icons/hi";
import styles from "./Header.module.css";
import useCart from "../../../hooks/useCart";
import useWishlist from "../../../hooks/useWishlist";
import SearchInput from "../SearchInput/SearchInput";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          TRENDY
        </Link>

        {/* Search — desktop */}
        <div className={styles.searchBar}>
          <SearchInput />
        </div>

        <nav className={styles.actions}>
          <button
            className={styles.iconBtn}
            onClick={() => setSearchOpen((p) => !p)}
            aria-label="Axtar"
          >
            <HiOutlineSearch size={22} />
          </button>

          <Link to="/account" className={styles.iconBtn} aria-label="account">
            <HiOutlineUser size={22} />
          </Link>

          <Link
            to="/wishlist"
            className={styles.iconBtn}
            aria-label="favorites"
          >
            <HiOutlineHeart size={22} />
            {wishlistCount > 0 && (
              <span className={styles.badge}>{wishlistCount}</span>
            )}
          </Link>

          <Link to="/cart" className={styles.iconBtn} aria-label="Səbət">
            <HiOutlineShoppingCart size={22} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </nav>
      </div>

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className={styles.mobileSearch}>
          <SearchInput />
        </div>
      )}
    </header>
  );
}
