import { createClient } from '@/prismicio'
import { PrismicRichText } from '@prismicio/react'
import Page from '@/components/Page';
import styles from '@/styles/Cards.module.css'

function Sejarah ({ results }: any) {
  return (
    <> 
      <div className={styles['article']}>
        <Page title={"Sejarah GBKP"} content={
          <PrismicRichText field={results[0].data.sejarah} />
        } />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('sejarah')

  return {
    props: { results }
  }
}

export default Sejarah;
