import { useState, useRef, useEffect } from "react";
import useProduct from "../../../../shared/hooks/useProduct";
import styles from "./FilterPanel.module.css";

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A → Z" },
  { value: "name-desc", label: "Name: Z → A" },
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
];

export default function FilterPanel() {
  const { sortOption, setSortOption, sortedProducts } = useProduct();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected =
    SORT_OPTIONS.find((o) => o.value === sortOption) ?? SORT_OPTIONS[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.panel}>
      <div className={styles.row}>
        <span className={styles.count}>
          {sortedProducts?.length ?? 0} products
        </span>

        <div className={styles.group}>
          <label className={styles.label}>Sort by</label>
          <div ref={ref} className={styles.wrapper}>
            <button
              onClick={() => setOpen((v) => !v)}
              className={styles.trigger}
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <span>{selected.label}</span>
              <i
                className={`ti ti-chevron-down ${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                aria-hidden="true"
              />
            </button>

            {open && (
              <ul role="listbox" className={styles.dropdown}>
                {SORT_OPTIONS.map((opt) => {
                  const isActive = opt.value === sortOption;
                  return (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={isActive}
                      onClick={() => {
                        setSortOption(opt.value);
                        setOpen(false);
                      }}
                      className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
                    >
                      <span>{opt.label}</span>
                      {isActive && (
                        <i
                          className={`ti ti-check ${styles.checkIcon}`}
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
