import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createRef } from 'react'
import MenuAdmin from 'component/atoms/MenuAdmin'
import MenuUser from 'component/atoms/MenuUser'
import MenuDefaultHeader from 'component/atoms/MenuDefaultHeader'
import CartNav from 'component/atoms/CartNav'
import { loadImage } from 'component/hook/useScripts'
import Image from 'next/image'


const menu = createRef()
const menuLogin = createRef()
const noneHeader = createRef()


const NavDefault = ({ typeUser, logged, name, avatar }) => {

  const [isPhone, setIsPhone] = useState(null)

  useEffect(() => {

    if (innerWidth < 1024) setIsPhone(true)
    setTimeout(() => {
      noneHeader.current.style.opacity = "1"
    }, 200);

    // addEventListener("resize", () => {
    //   if (innerWidth < 1024) {
    //     setIsPhone(true)
    //   }
    //   else setIsPhone(null)
    // })

  }, [])

  const toggleMenu = (menu) => {
    menu.current.classList.toggle("open-nav-menu-first")
  }


  return (
    <>
      <div ref={noneHeader} style={{ opacity: "0" }} className="mw-grid box-children-header">
        <Link href="/">
          <a className="text-logo-nav">FABIAN SPORT</a>
        </Link>

        <nav onClick={() => toggleMenu(menu)} className="nav-menu-first" ref={menu} >
          {
            logged === false
              ? <></>
              : isPhone === null
                ? <></>
                : <> {typeUser === 1 ? <MenuAdmin /> : <MenuUser />} </>
          }
          <MenuDefaultHeader />
        </nav>


        {
          logged === false
            ? <></>
            : isPhone === true
              ? <></>
              :
              <nav className="nav-menu-two" ref={menuLogin} onClick={() => toggleMenu(menuLogin)} >
                {typeUser === 1 ? <MenuAdmin /> : <MenuUser />}
              </nav>
        }


        <div className="cart-and-log mw-flex-row">
          <CartNav />

          <div className="mw-flex nav-login">
            {
              logged === false
                ?
                <>
                  <Link href="/login">
                    <a className="image-user-nav">
                      <Image
                        width={30}
                        height={30}
                        src={`/images/nav/user_login.svg`}
                        alt="user"
                      />
                    </a>
                  </Link>
                </>
                :
                <>
                  {
                    isPhone === true
                      ?
                      <span className="image-user-nav">
                        <Image
                          width={30}
                          height={30}
                          src={avatar || `/images/nav/user_default.svg`}
                          alt="login"
                          onClick={() => toggleMenu(menu)}
                        />
                      </span>
                      :
                      <span className='image-user-nav'>
                        <Image
                          width={30}
                          height={30}
                          onClick={() => toggleMenu(menuLogin)}
                          src={avatar || `/images/nav/user_default.svg`}
                          alt="user"
                        />
                      </span>
                  }
                </>
            }
          </div>

          {
            logged === false
              ? isPhone === true
                ?
                <span className="image-nav-menu">
                  <Image
                    width={30}
                    height={30}
                    onClick={() => toggleMenu(menu)}
                    src={`/images/nav/menu.svg`}
                    alt="menu"
                  />
                </span>
                : <></>
              : <></>

          }

        </div>

      </div>
    </>
  )
}

export default NavDefault
