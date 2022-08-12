import CardMenuFooter from "./CardMenuFooter"
import FollowUs from "./FollowUs"

const GridMapNav = ({ listMapMenu, styles }) => {
  return (
    <div className={styles.content_footer}>
      {
        listMapMenu.map((l, i) => (
          <CardMenuFooter
            key={i}
            styles={styles}
            image={l.image}
            title={l.title}
            links={l.links}
          />
        ))
      }
      <FollowUs styles={styles} />
    </div>
  )
}

export default GridMapNav
