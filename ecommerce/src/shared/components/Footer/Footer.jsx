import styles from "./Footer.module.css";
import Navbar from "../Navbar/Navbar"; // öz path-ına uyğunlaşdır

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* ── NAVBAR SLOTU ── */}
      <div className={styles.navbarSlot}>
        <Navbar />
      </div>

      {/* ── LİNKLƏR ── */}
      <div className={styles.top}>
        <div className={styles.col}>
          <h4>Şirkət</h4>
          <ul>
            <li><a href="#">Haqqımızda</a></li>
            <li><a href="#">Karyera</a></li>
            <li><a href="#">Mətbuat</a></li>
            <li><a href="#">Əlaqə</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Yardım</h4>
          <ul>
            <li><a href="#">Sifariş izlə</a></li>
            <li><a href="#">İadə et</a></li>
            <li><a href="#">Tez-tez soruşulan suallar</a></li>
            <li><a href="#">Müştəri xidməti</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Satıcılar</h4>
          <ul>
            <li><a href="#">Satıcı ol</a></li>
            <li><a href="#">Satıcı girişi</a></li>
            <li><a href="#">Reklam ver</a></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Bizi izləyin</h4>
          <div className={styles.socials}>
            {/* Instagram */}
            <button className={styles.socialBtn} aria-label="Instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.499 5.786 2.225 7.152 2.163 8.418 2.105 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.197.157 3.355.636 2.014 1.977.673 3.318.194 5.16.109 7.015.05 8.295 0 8.704 0 12c0 3.296.05 3.705.109 4.985.085 1.855.564 3.697 1.905 5.038 1.341 1.341 3.183 1.82 5.038 1.905C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.855-.085 3.697-.564 5.038-1.905 1.341-1.341 1.82-3.183 1.905-5.038.059-1.28.109-1.689.109-4.985 0-3.296-.05-3.705-.109-4.985-.085-1.855-.564-3.697-1.905-5.038C20.645.636 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button className={styles.socialBtn} aria-label="Facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </button>

            {/* Twitter / X */}
            <button className={styles.socialBtn} aria-label="Twitter">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* ── ALT HİSSƏ ── */}
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Bütün hüquqlar qorunur.
        </span>
        <div className={styles.payments}>
          <span className={styles.payBadge}>VISA</span>
          <span className={styles.payBadge}>MC</span>
          <span className={styles.payBadge}>AMEX</span>
          <span className={styles.payBadge}>PayPal</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;