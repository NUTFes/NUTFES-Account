import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>NUTMEG製のサービスのアカウントを管理</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Links</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/register`}>
              <a>register</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/login`}>
              <a>login</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/user`}>
              <a>user</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/edit`}>
              <a>edit</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
