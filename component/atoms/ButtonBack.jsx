import { useRouter } from 'next/router'

export default function ButtonBack() {
  const router = useRouter()
  
  const qtyComponent = () => {
    if (Object.entries(router.components).length === 2) router.push('/productos/todos')
    else router.back()
  }

  return <a onClick={() => qtyComponent()}>Atras</a>
}
