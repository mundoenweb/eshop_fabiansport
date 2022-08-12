import Image from "next/image"

const LogoFooter = ({ styles }) => {
  return (
    <div className={styles.box_logo}>
      <Image
        src={`/images/logo_letras_blancas.svg`}
        width={300}
        height={229}
        alt="fabiansport.com"
      />
    </div>
  )
}

export default LogoFooter
