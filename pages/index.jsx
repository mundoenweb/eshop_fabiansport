import Banner from '../components/common/Banner'
import ContentBanner from '@/components/pages/Home/ContentBanner'
import GridCategoryHome from '../components/pages/Home/GridCategoryHome'
import BannerQtyProducts from '@/components/pages/Home/BannerQtyProducts'
import GridBrandsHome from '../components/pages/Home/GridBrandsHome'
import styles from '@/style/pages/home.module.css'

function Home() {
  return (
    <>
      <Banner>
        <ContentBanner styles={styles} />
      </Banner>
      <GridCategoryHome styles={styles} />
      <BannerQtyProducts styles={styles} />
      <GridBrandsHome styles={styles} />
      <div className="mw-grid separador" />
    </>
  )
}

export default Home
