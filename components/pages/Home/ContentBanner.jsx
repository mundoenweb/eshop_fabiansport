import { createRef } from "react"
import { handleBodyScroll } from "@/utils/handleBodyScroll"
import Image from "next/image"
import Link from "next/link"

const ContentBanner = ({styles}) => {

  const boxBannerContent = createRef()

  const moreHome = () => {
    const heightBanner = boxBannerContent.current.getBoundingClientRect().height
    handleBodyScroll(0, (heightBanner + 56))
  }

  return (
    <div className={styles.content_banner} ref={boxBannerContent}>
      <div className={styles.img_logo_banner}>
        <Image
          src={`/images/logo_letras_blancas.svg`}
          layout='fill'
          alt="logo"
        />
      </div>
      <Link href="/productos/todos">
        <a className={`button button-white ${styles.buttom_banner}`}>Ver Productos</a>
      </Link>

      <div className={styles.buttom_banner_more}>
        <Image
          width={54}
          height={20}
          src="/images/flecha-abajo.svg"
          alt="ver mas"
          onClick={moreHome}
        />
      </div>

    </div>
  )
}

export default ContentBanner

