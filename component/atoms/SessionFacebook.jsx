import { ajax, valideteResponse } from "component/hook/Ajax"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import { addToLike, startSesion, updateAvatar } from "redux/actionCreators"
import store from "redux/store"
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const SessionGoogle = ({ likesStore }) => {
  const router = useRouter()

  const loginFacebook = async (res) => {

    console.log(res)
    return
    if (res.status) return

    const formData = new FormData(),
      user = {
        email: res.email,
        facebookId: res.userID,
        name: res.name,
        imageUrl: res.picture.data.url
      }
      
    let href = router.query.path,
      likes


    formData.append('json', JSON.stringify(user))
    let response = await ajax(`${process.env.API}/loginRedSocial`, 'POST', formData)
    if (!valideteResponse(response)) return


    if (response.data.like) {
      likes = likesStore.filter(like => {
        const same = response.data.like.find(likeDB => likeDB.idProduct == like.idProduct && likeDB.model == like.model)
        if (!same) return like
      })
    } else likes = likesStore

    for (const like of likes) {
      like.idUser = response.data.user.id
      const formLike = new FormData()
      formLike.append('json', JSON.stringify(like))
      ajax(`${process.env.API}/registrarFavorito`, "POST", formLike)
    }

    if (response.data.like) {
      for (const like of response.data.like) store.dispatch(addToLike(like))
    }

    store.dispatch(startSesion(response.data.user))
    store.dispatch(updateAvatar(res.picture.data.url))
    setTimeout(() => {
      router.push(href || "/productos/todos")
    }, 500);
  }

  return (
    <>
      <FacebookLogin
        appId="898403967696340"
        autoLoad={false}
        fields="name,email,picture"
        callback={loginFacebook}
        render={renderProps => (
          <a className="button btn-google face" onClick={renderProps.onClick} >
            <img src={`${process.env.STATIC_PUBLIC}images/facebook-login.png`}
              alt="sesión facebook"
            />
          </a>
        )}
      />
    </>
  )
}
const mapStateToProps = state => ({
  likesStore: state.likeReducer.products
})

export default connect(mapStateToProps)(SessionGoogle)
