import Image from "next/image"
import Link from "next/link"
import { loadImage } from "../hook/useScripts"


const CardProductBoard = ({ id, image, children, code }) => {
  console.log(image)
  return (
    <div className="product-board">
      <div className="box-img-product-board">
        {
          id == undefined
            ?
            <Image
              src={image}
              width={78}
              height={78}
              objectFit='contain'
              alt="articulo"
            />
            :
            <Link href={`/articulo/${id}/${code || ""}`}>
              <Image
                src={image}
                width={78}
                height={78}
                objectFit='contain'
                alt="articulo"
              />
            </Link>
        }
      </div>
      {
        children.length < 3
          ?
          id == undefined
            ?
            <a className="a-content-pproduct-board">
              <div className="box-content-product-board-basic">
                {children[0]}
              </div>
            </a>
            :
            <Link href={`/articulo/${id}/${code || ""}`}>
              <a className="a-content-pproduct-board">
                <div className="box-content-product-board-basic">
                  {children[0]}
                </div>
              </a>
            </Link>
          :
          < div className="box-content-product-board">
            {
              id == undefined
                ?
                <a className="a-content-pproduct-board">
                  <div className="content-product-board">
                    {children[0]}
                  </div>
                </a>
                :
                <Link href={`/articulo/${id}/${code || ""}`}>
                  <a className="a-content-pproduct-board">
                    <div className="content-product-board">
                      {children[0]}
                    </div>
                  </a>
                </Link>
            }
            {
              children[1] &&
              <div>
                {children[1]}
              </div>
            }
          </div>
      }

      <div className="box-options-product-board">
        {children.length < 3 ? children[1] : children[2]}
      </div>

    </div >
  )
}


export default CardProductBoard
