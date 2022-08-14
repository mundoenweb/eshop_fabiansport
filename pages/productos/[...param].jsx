import { NextSeo } from 'next-seo'
import Head from 'next/head'
import GridProductos from '../../components/pages/Products/GridProducts'
import { ajax, valideteResponse } from '../../component/hook/Ajax'
import { filterProductsUserSSR } from '../../component/hook/useFilter'
import BtnPagination from '../../components/pages/Products/BtnPagination'
import FilterProductsUser from '../../component/molecules/FilterProductsUser'

const SeoProducts = ({ SEO }) => {
  if (!SEO) {
    return (<>
      <Head>
        <link rel="canonical" href={`https://fabiansport.com/productos/todos`} />
      </Head>
      <NextSeo title={`${process.env.SITE_NAME} | Productos`} />
    </>)
  }
  return (<>
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
  </>)
}

const ListProducts = ({ paramsForm, productos, pages, pageCurrent, SEO }) => {

  return (<>
    <SeoProducts SEO={SEO} />
    <FilterProductsUser paramsForm={paramsForm} />
    <div className="mw-grid">
      <GridProductos productos={productos} />
      {
        productos.length > 0 &&
        <BtnPagination pages={pages} pageCurrent={pageCurrent} />
      }
    </div>
    <div className="mw-grid separador"></div>
  </>)
}


export async function getServerSideProps({ query }) {
  const api = process.env.API
  const { paramsForm, params, SEO } = await filterProductsUserSSR(query)
  let productos


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

