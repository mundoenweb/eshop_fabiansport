const DesingBy = ({ link, title, styles }) => (
  <p className={styles.autor}>
    Diseñado por: <a
      href={link}
      target="new"
    >
      {title}
    </a>
  </p>
)


export default DesingBy
