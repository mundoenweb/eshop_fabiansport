import Image from "next/image"
import Link from "next/link"

const CardCategoryHome = ({ link, name, styles }) => (
  <Link href={`/productos/${link}`} >
    <a className={styles.card_category}>
      <Image
        width={205}
        height={140}
        src={`/images/${name}.jpg`}
        alt={name}
      />
      <p className={styles.card_title_category}>
        {name}
      </p>
    </a>
  </Link>
)

export default CardCategoryHome
