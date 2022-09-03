import Head from 'next/head'
import Image from 'next/image'
import ProductCard from '../Components/Card'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <Footer/>
    </div>
  )
}
