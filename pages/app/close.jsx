import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import store from 'redux/store'
import { endSesion } from 'redux/actionCreators'
import nProgress from 'nprogress'
import Image from 'next/image'

const Close = () => {
  const router = useRouter()

  useEffect(() => {
    nProgress.start()
    store.dispatch(endSesion())
    setTimeout(() => {
      router.push('/')
    }, 2500);
  }, [router])

  return (
    <>
      <NextSeo title="Cerrando Sesión" />
      <div className="banner-home box-close-sesion">
        <div className="box-content-banner-principal">
          <div className="content-banner-principal-home">
            <Image
              width={180}
              height={180}
              src={`${process.env.STATIC_PUBLIC}images/sesion-off.svg`}
              alt="logo"
            />
            <p>Cerrando Sesión...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Close
