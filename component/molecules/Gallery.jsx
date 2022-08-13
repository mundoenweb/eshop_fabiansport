import Image from 'next/image';
import nProgress from 'nprogress';
import { createRef, useEffect, useState } from 'react';
import { handleChangeImgGallery } from '../hook/usePageProduct';

const galery = createRef()

const Gallery = ({ images, name }) => {

  const [image, setImage] = useState(images[0])
  const [position, setPosition] = useState(0)
  const [animate, setAnimate] = useState("animate")

  useEffect(() => {
    setImage(images[0])
    setPosition(0)
  }, [name, images])

  const nextImage = () => {
    handleChangeImgGallery("next", images, setImage, position, setPosition)
  }

  const backImage = () => {
    handleChangeImgGallery("back", images, setImage, position, setPosition)
  }

  const delteAnimateLoad = () => {
    setAnimate('')
  }

  return (
    <div className={`gallery-sale ${animate}`} ref={galery}>
      <Image
        layout='fill'
        src={image}
        alt={name}
        priority
        onLoadingComplete={delteAnimateLoad}
        onLoad={() => nProgress.done()}
      />
      {
        images.length == 1 ? <></>
          : <>
            <div className="btn-galeria" >
              <div
                className="btn-gallery gallery-back"
                onClick={backImage}>
              </div>
              <div
                className="btn-gallery gallery-next"
                onClick={nextImage}>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Gallery
