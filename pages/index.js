import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../public/styles/utils.module.css'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>昭后成游,南土爰底。</p>
        <p>
        反成乃亡,其罪伊何?争遣伐器,何以行之?并驱击翼,何以将之?昭后成游,南土爰底。
        </p>
      </section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            <br />
              <small className={utilStyles.lightText}>
              {date}  
              </small>
            </li>
          ))}
        </ul>
    </Layout>
  )
}

