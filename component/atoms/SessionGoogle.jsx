import { ajax, valideteResponse } from "component/hook/Ajax"
import { useRouter } from "next/router"
import GoogleLogin from "react-google-login"
import { connect } from "react-redux"
import { addToLike, startSesion, updateAvatar } from "redux/actionCreators"
import store from "redux/store"

const SessionGoogle = ({ likesStore }) => {
  const router = useRouter()

  const loginGoogle = async (res) => {
    if (!res.profileObj) return

    let href = router.query.path,
      likes
    const formData = new FormData(),
      user = {
        email: res.profileObj.email,
        googleId: res.profileObj.googleId,
        name: res.profileObj.name,
        imageUrl: res.profileObj.imageUrl
      }

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
    store.dispatch(updateAvatar(res.profileObj.imageUrl))
    setTimeout(() => {
      router.push(href || "/productos/todos")
    }, 500);
  }

  return (
    <>
      <GoogleLogin
        clientId="30748486200-m7fvoungflbkcs0ngu11al3qnqnkfr3s.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={loginGoogle}
        onFailure={loginGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <a className="button btn-google" onClick={renderProps.onClick} >
            <img src={`${process.env.STATIC_PUBLIC}images/google.svg`}
              alt="sesión google"
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
