import { NextSeo } from 'next-seo'
import Head from 'next/head'
import GridProductos from '../../component/GridProducts'
import { ajax, valideteResponse } from '../../component/hook/Ajax'
import { filterProductsUserSSR } from '../../component/hook/useFilter'
import BtnPagination from '../../component/molecules/BtnPagination'
import FilterProductsUser from '../../component/molecules/FilterProductsUser'



const ListProducts = ({ paramsForm, productos, pages, pageCurrent, SEO }) => {

  return (
    <>
      {
        SEO === null
          ?
          <>
            <Head>
              <link rel="canonical" href={`https://fabiansport.com/productos/todos`} />
            </Head>
            <NextSeo title={`${process.env.SITE_NAME} | Productos`} />
          </>
          : <>
            <NextSeo
              title={SEO.title}
              description={SEO.description}
              openGraph={{
                title: SEO.title,
                url: SEO.url,
                description: SEO.description,
                images: SEO.images
              }}
            />
            <Head>
              <link rel="canonical" href={`https://fabiansport.com/productos/${SEO.canonical}`} />
            </Head>
          </>
      }

      <FilterProductsUser paramsForm={paramsForm} />
      <div className="mw-grid">
        <GridProductos productos={productos} />
        {
          productos.length > 0 && <BtnPagination pages={pages} pageCurrent={pageCurrent} />
        }
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}


export async function getServerSideProps({ query }) {
  const api = process.env.API
  const { paramsForm, params, SEO } = await filterProductsUserSSR(query)
  let productos

  console.log(params)



  if (typeof (params) === "string") productos = await ajax(`${api}/productos?${params}`)
  else productos = await ajax(`${api}/productosFiltro`, "POST", params)

  if (!valideteResponse(productos) || !productos.data) {
    return {
      props: {
        SEO,
        paramsForm,
        productos: [],
        pages: 1,
        pageCurrent: 1,
      }
    }
  }

  return {
    props: {
      SEO,
      paramsForm,
      productos: productos.data.productos || [],
      pages: productos.data.totalPage || 1,
      pageCurrent: productos.data.pageActual || 1,
    }
  }
}



export default ListProducts

