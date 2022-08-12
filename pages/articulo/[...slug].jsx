import PageProduct from '../../component/template/PageProduct';
import { ajax } from '../../component/hook/Ajax';
import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useCleanObjectArticle } from 'component/hook/useCleanObjectArticle';
import { destacados } from 'component/hook/useQuery';
import CardProduct from 'component/CardProduct';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuantityStock } from 'component/hook/useQuantityStock';

const Product = ({ product, idDad, currentModel, models }) => {
  const router = useRouter()
  const [productosDestacados, setProductosDestacados] = useState([])
  useEffect(() => {
    destacados(setProductosDestacados)
  }, [])

  if (!product) {
    return (
      <>
        <div className="mw-grid separador"></div>
        <section className="mw-grid">
          <div className="alert alert-yellow">
            <span>Ha consultado un producto agotado por el momento ó que no existe.</span>
            <Link href="/productos/todos" >
              <a> Ver todos los productos</a>
            </Link>
          </div>
          <h1 className="t2 title-gird-productos">Productos Destacados</h1>
          {
            productosDestacados.length == 0
              ?
              <div className="alert alert-blue">
                <span>Cargando productos destacados... </span>
              </div>
              :
              <div className="grid-products">
                {console.log("productos destacados")}
                {
                  productosDestacados.map(familyProduct => (
                    familyProduct.map((p, i) => {
                      if (p.es_padre) return (
                        <CardProduct
                          code={p.codigo}
                          key={i}
                          id={p.id}
                          idDad={p.id}
                          name={p.name}
                          costo={p.costo}
                          descuento={p.descuento}
                          image={p.image[0]}
                          familyProduct={familyProduct}
                        />
                      )
                    })
                  ))
                }
              </div>
          }
        </section>
        <div className="mw-grid separador"></div>
      </>
    )
  }

  return (
    <>
      <NextSeo
        title={`${process.env.SITE_NAME} | ${product.name}`}
        description={`${product.descripcion}`}
        openGraph={{
          title: `${product.name} - S/ ${product.costo - product.descuento}`,
          description: product.descripcion,
          type: "article",
          url: `${process.env.WEB}/articulo/${idDad}/${currentModel}`,
          images: [
            {
              url: `${product.image[0]}`,
              width: 998,
              height: 522,
              alt: product.name,
            },
            {
              url: `${product.image[0]}`,
              width: 998,
              height: 522,
              alt: product.name,
            }
          ],
        }}
      />
      <Head>
        <link rel="canonical" href={`https://fabiansport.com/articulo/${idDad}`} />
      </Head>
      <div className="mw-grid separador"></div>
      <div className="mw-grid product-view-sale">
        <PageProduct product={product} currentModel={currentModel} models={models} idDad={idDad} />
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  let id = query.slug[0],
    code = query.slug[1],
    product,
    models,
    rsp

  ajax(`${process.env.API}/clic/${id}`, "PUT")
  rsp = await ajax(`${process.env.API}/producto/${id}`)
  if (rsp.status != 200) return { props: { product: null, } }

  if (rsp.data.id) rsp = await ajax(`${process.env.API}/producto/${rsp.data.id}`)
  if (code) {
    product = rsp.data.find((product) => product.codigo === code)
    if (!product) product = rsp.data[0]
  }
  else product = rsp.data[0]




  models = rsp.data.map(model => ({
    codigo: model.codigo,
    id_color: model.id_color,
    name_color: model.name_color,
    image: model.image[0]

  }))

  return {
    props: {
      models,
      product,
      currentModel: code || product.codigo,
      idDad: query.slug[0]
    }
  }
}



export default Product
