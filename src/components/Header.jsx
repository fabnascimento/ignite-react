import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
      <span className={styles.logoText}>
        Ignite Feed
      </span>
    </header>
  )
}
