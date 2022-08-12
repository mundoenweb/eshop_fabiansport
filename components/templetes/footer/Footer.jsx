import styles from "@/style/templetes/fotter.module.css"
import DesingBy from "./components/DesingBy"
import GridMapNav from "./components/GridMapNav"
import LogoFooter from "./components/LogoFooter"
import { listMapMenu } from "./utils/ListMapMenu"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="mw-grid">
        <GridMapNav styles={styles} listMapMenu={listMapMenu} />
        <LogoFooter styles={styles} />
        <DesingBy
          styles={styles}
          link='https://tuemprende.com'
          title='tuemprende.com'
        />
      </div>
    </footer>
  )
}

export default Footer
