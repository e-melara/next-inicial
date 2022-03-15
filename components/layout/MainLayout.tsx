import Head from 'next/head'
import React, { FC } from 'react'

import NavBar from '../NavBar'
import styles from "./MainLayout.module.css";

interface Props {
  title?: string;
}

export const MainLayout: FC<Props> = ({ title = 'Edwin Melara', children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
