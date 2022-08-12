import Image from "next/image"

const FollowUs = ({ styles }) => {
  return (
    <div>
      <p className={styles.titles_footer}>Síguenos</p>
      <div className={`mw-flex ${styles.siguenos}`}>
        <a href="https://www.facebook.com/fabiansportperu/" target="new">
          <Image
            height={33}
            width={33}
            src={`/images/face_white.svg`}
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com/fabiansportperu/" target="new">
          <Image
            height={33}
            width={33}
            src={`/images/instagram_white.svg`}
            alt="instagram"
          />
        </a>
      </div>
    </div>
  )
}

export default FollowUs
