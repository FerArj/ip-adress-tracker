import banner from "../assets/pattern-bg-desktop.png"
import styles from "./Header.module.css"
import btnIcon from "../assets/icon-arrow.svg"
import { useRef } from "react"

function Header({ onSearch }) {
  const ipAdressRef = useRef('');

  function handleSearch() {
    const ipAddress = ipAdressRef.current.value;
    onSearch(ipAddress);
  }

  return (
    <>
      <img className={styles.banner} src={banner} alt="banner" />
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <h1>IP Adress Tracker</h1>
          <div className={styles.inputContainer}>
            <input type="text" ref={ipAdressRef} placeholder="Search for any IP address or domain" />
            <button onClick={handleSearch} className={styles.searchButton}>
              <img src={btnIcon} alt="search" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
