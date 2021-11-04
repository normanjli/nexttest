
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import H1 from '../components/h1'
import Button from '../components/button'
import helper  from '../helper'
import React, {useState} from 'react'
let key = 0
export default function Home() {
  const [array, setArray]= useState([new Array])
  const clickHandled =()=>{
    setArray(array.concat(<H1 key={key} text={`wowowowowow`}></H1>))
    key++
  }
  return (
      <div className={styles.container}>
      <Head>
        <title>test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <H1 text={'weeee'}/>
      <Button onClick={clickHandled}/>
    <Link href = "/test">test</Link>
    {array}
    </div>
  )
}
