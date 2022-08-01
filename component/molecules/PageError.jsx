import { loadImage } from "component/hook/useScripts";
import { NextSeo } from "next-seo";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState, createRef } from "react";

const boxBanner = createRef()
const boxBannerContent = createRef()

const PageError = ({ 
  statusCode,
 }) => {

  const router = useRouter()
  const err = {
    '404': "La página que buscas no existe",
    '500': "No eres tu somos nosotros, intental más tarde",
  }

  const [isPhone, setIsPhone] = useState(null)

  useEffect(() => {

    function resize() {
      if (innerWidth < 640) setIsPhone("m")
      else setIsPhone(null)
    }

    if (innerWidth < 640) setIsPhone("m")
    addEventListener("resize", resize)

    // let redirect = setTimeout(() => {
    //   router.push("/")
    // }, 10000);

    return () => {
      removeEventListener("resize", resize)
      // clearTimeout(redirect)
    }
  }, [])

  useEffect(() => {
    var navInfo = window.navigator.appVersion.toLowerCase();
    if (navInfo.search("android") == -1) {
      if (isPhone) {
        const heightCurrent = boxBanner.current.getBoundingClientRect().height
        const heightCurrentContent = boxBanner.current.getBoundingClientRect().height
        boxBanner.current.style.minHeight = `${heightCurrent + 56}px`
        boxBannerContent.current.style.minHeight = `${heightCurrentContent + 56}px`
      }
    }
  }, [isPhone])

  return (
    <>
      <NextSeo title={`${process.env.SITE_NAME} | Error: ${statusCode}`} />
      <div className="banner-home" ref={boxBanner}>
        <img onLoad={e => loadImage(e)}
          loading="lazy"
          className="image-bg-banner-home"
          alt="banner"
          src={`${process.env.STATIC_PUBLIC}images/banners/bg_7${isPhone || ""}.jpg`}
        />
        <div className="cap-bg-img-home"></div>
        <div className="box-content-banner-principal">
          <div className="content-banner-principal-home" ref={boxBannerContent}>
            <img src={`${process.env.STATIC_PUBLIC}images/logo_letras_blancas.svg`}
              alt="logo"
              className="img-logo-banner-home"
            />
            <h1 className="title-err">error {statusCode}</h1>
            <p className="msg-err">{err[`${statusCode}`] || "Ops!! Lo sentimos hubo un error inesperado."}</p>
            <Link href="/">
              <a className="button button-white buttom-baner-home">Sacame de aquí</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageError
