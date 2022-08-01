import { none, toShow } from "./useScripts"

export const toShowModal = (modal) => {
  modal = modal.current
  toShow(modal)
}
export const toNoneModal = (modal) => {
  modal = modal.current
  none(modal)
  resetFormModal(modal.children[0].children[1].children)
}

/* Cerrar modales */
export const closeModals = (e) => {
  let boxModal = e.nativeEvent.path[3]
  let contentModal = e.nativeEvent.path[2].children[1].children
  resetFormModal(contentModal)

  none(boxModal)
}

const resetFormModal = (modal) => {
  console.log(modal)
  for (const i of modal){
    if (i.localName === "form") i.reset()
    for (const e of i.children) {
      if (e.localName === "form") e.reset()
    }
  }
}
