import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import useProduct from "../../../hooks/useProduct";
import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const { searchValue, setSearchValue } = useProduct();

  function onClose() {
    setSearchValue("");
  }

  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <HiOutlineSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Məhsul axtar..."
        className={styles.searchInput}
        value={searchValue}
        onChange={handleInputChange}
        autoFocus={window.innerWidth < 768}
      />
      {searchValue && (
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Bağla"
        >
          <HiOutlineX size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
