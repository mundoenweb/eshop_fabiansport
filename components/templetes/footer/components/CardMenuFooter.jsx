import Image from "next/image"
import Link from "next/link"

const CardMenuFooter = ({
  image,
  title,
  links,
  styles
}) => {
  return (
    <div>
      <p className={styles.titles_footer}>{title}</p>
      <div className="mw-flex">
        <Image
          width={20}
          height={20}
          src={`/${image}`}
          alt="world"
        />
        <ul>
          {
            links.map((l, i) => (
              <li key={i}>
                <Link href={l.link} >
                  <a>{l.title}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CardMenuFooter
