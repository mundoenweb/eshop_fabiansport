import nProgress from 'nprogress';
import { createRef } from 'react';
import { useChangeImgGallery } from '../hook/usePageProduct';

const galery = createRef()

const Gallery = ({ images, name }) => {

  return (
    <div className="gallery-sale" ref={galery}>
      <img
        src={images[0]}
        alt={name}
        onLoad={() => nProgress.done()}
      />

      {
        images.length == 1 ? <></>
          : <>
            <div className="btn-galeria" >
              <div
                className="btn-gallery gallery-back"
                onClick={() => useChangeImgGallery(
                  "back",
                  images,
                  galery.current,
                )}>
              </div>
              <div
                className="btn-gallery gallery-next"
                onClick={() => useChangeImgGallery("next",
                  images,
                  galery.current,
                )}>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Gallery
