addEventListener("beforeunload", e => {
  console.log(e)
  e.returnValue = "se perdera la informacion del carrito"
})
