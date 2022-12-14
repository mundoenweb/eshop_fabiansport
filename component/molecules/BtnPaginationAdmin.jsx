import { handleBodyScroll } from '@/utils/handleBodyScroll'

const BtnPaginationAdmin = ({pages, setPages, slugFilter, setSlugFilter}) => {

  const nextPag = () => {
    setPages({ ...pages, pageCurrent: pages.pageCurrent + 1 })
    setSlugFilter({ ...slugFilter, pageActual: slugFilter.pageActual + 1 })
    handleBodyScroll()
  }
  const backPag = () => {
    setPages({ ...pages, pageCurrent: pages.pageCurrent - 1 })
    setSlugFilter({ ...slugFilter, pageActual: slugFilter.pageActual - 1 })
    handleBodyScroll()
  }

  return (
    <div className="pagination">
      {
        pages.pageCurrent === 1
          ?
          <a className="a-inactive">Atras</a>
          :
          <a onClick={() => backPag()}>Atras</a>
      }
          |
      {
        pages.pageCurrent < pages.pages
          ?
          <a onClick={() => nextPag()}>Siguiente</a>
          :
          <a className="a-inactive">Siguiente</a>
      }
    </div>
  )
}

export default BtnPaginationAdmin
