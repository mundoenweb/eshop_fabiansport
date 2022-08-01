import { useRouter } from 'next/router'

const BtnPagination = ({pages, pageCurrent}) => {
  const router = useRouter()

  const nextPag = () => {
    let paramsCurrent = router.asPath
    
    if (router.query.pag) {
      let path = paramsCurrent.substring(0, paramsCurrent.length - 1)
      path += (pageCurrent + 1)
      router.push(path)
      return
    }
    
    paramsCurrent = `${paramsCurrent}?pag=${pageCurrent + 1}`
    router.push(paramsCurrent)
  }
  const backPag = () => {
    let paramsCurrent = router.asPath

    let path = paramsCurrent.substring(0, paramsCurrent.length - 1)
    path += (pageCurrent - 1)
    router.push(path)
  }

  return (
    <div className="pagination">
      {
        pageCurrent === 1
          ? <a className="a-inactive">Atras</a>
          : <a onClick={() => backPag()}>Atras</a>
      }
          |
      {
        pageCurrent < pages
          ? <a onClick={() => nextPag()}>Siguiente</a>
          : <a className="a-inactive">Siguiente</a>
      }
    </div>
  )
}

export default BtnPagination
