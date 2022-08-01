import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createRef } from 'react'
import MenuAdmin from 'component/atoms/MenuAdmin'
import MenuUser from 'component/atoms/MenuUser'
import MenuDefaultHeader from 'component/atoms/MenuDefaultHeader'
import CartNav from 'component/atoms/CartNav'
import { loadImage } from 'component/hook/useScripts'


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
                  {
                    isPhone === null
                      ?
                      <Link href="/login">
                        <a className="a-login">Inicia Sesión ó <br /> Registrate Gratis </a>
                      </Link>
                      :
                      <Link href="/login">
                        <a>
                          <img className="image-user-nav"
                            src={`${process.env.STATIC_PUBLIC}images/nav/user_login.svg`}
                            alt="user"
                          />
                        </a>
                      </Link>
                  }
                </>
                :
                <>
                  {
                    isPhone === true
                      ?
                      <img className="image-user-nav"
                        src={avatar || `${process.env.STATIC_PUBLIC}images/nav/user_default.svg`}
                        alt="login"
                        onClick={() => toggleMenu(menu)}
                      />
                      :
                      <div className="mw-flex" onClick={() => toggleMenu(menuLogin)}>
                        <img className="image-user-nav"
                          src={avatar || `${process.env.STATIC_PUBLIC}images/nav/user_default.svg`}
                          alt="user"
                        />
                        {
                          name != "admin" &&
                          <a className="a-login name-user"  >
                            {name.split(" ")[0]} <br />
                            {
                              name.split(" ")[1] && name.split(" ")[1].length < 4
                                ? name.split(" ")[2]
                                : name.split(" ")[1]
                            }
                          </a>
                        }
                      </div>
                  }
                </>
            }
          </div>

          {
            logged === false
              ? isPhone === true
                ?
                <img onClick={() => toggleMenu(menu)}
                  className="image-nav-menu"
                  src={`${process.env.STATIC_PUBLIC}images/nav/menu.svg`}
                  alt="carrito"
                  onLoad={e => loadImage(e)}
                />
                : <></>
              : <></>

          }

        </div>

      </div>
    </>
  )
}

export default NavDefault
