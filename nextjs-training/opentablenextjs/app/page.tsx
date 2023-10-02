import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className="text-blue-400 text-6xl text-3l font-bold underline">Hello World</h2>
    </main>
  )
}
