import Head from 'next/head'
import { motion } from 'framer-motion'

type Props = {
  title?: string
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout: React.FunctionComponent<Props> = ({ children, title }) => (
  <motion.article
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Irene Ong</title>
          <meta property='og:title' content={title} />
        </Head>
      )}

      {children}
    </>
  </motion.article>
)

export default Layout
