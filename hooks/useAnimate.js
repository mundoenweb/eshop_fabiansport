import {useState} from "react"

const useAnimate = () => {
  const [animate, setAnimate] = useState('animete')

  const deleteAnimate = () => {
    setAnimate('')
  }

  return [
    animate,
    deleteAnimate
  ]
}

export default useAnimate
