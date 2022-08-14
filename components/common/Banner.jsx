import { useState, useEffect, createRef } from "react"
import styles from "@/style/common/banner.module.css"
import Image from "next/image"

const Banner = ({ children }) => {
  const imgInit = "/images/banners/bg_dsfq.jpg"

  const boxBanner = createRef()
  const [img, setImg] = useState(imgInit)

  useEffect(() => {
    const image = Math.floor(Math.random() * (-1 + 9)) + 1
    if (innerWidth < 640) {
      const img = `/images/banners/bg_${image}m.jpg`
      setImg(img)
    }
    else {
      const img = `/images/banners/bg_${image}.jpg`
      setImg(img)
    }
  }, [])

  return (
    <div className={styles.banner} ref={boxBanner}>
      <Image
        priority={true}
        layout='fill'
        objectFit="cover"
        alt="banner"
        src={img}
      />
      {children}
    </div>
  )
}


export default Banner
