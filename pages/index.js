import Head from 'next/head'
import { useState } from "react"
import FloatWhatsApp from "../components/FloatWhatsApp"
import Footer from "../components/Footer"
import Blueprints from "../components/home/Blueprints"
import Header from "../components/home/Header"
import WeGotYou from "../components/home/WeGotYou"
import WhyIsoPanel from "../components/home/whyIsopanel/WhyIsoPanel"
import TopBar from "../components/TopBar"
import MenuIcon from "../components/MenuIcon"
import MenuOverlay from "../components/MenuOverlay"

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuIcon = (
    <div
      className="md:hidden relative z-50"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <MenuIcon open={menuOpen} size="small" />
    </div>
  )

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar>
        {menuIcon}
      </TopBar>

      <main className="">
        <div className="h-16" />
        <Header />

        <div className="h-60" />

        <div className="bg-slate-100 py-10">
          <div className="container">
            <WeGotYou />
          </div>
        </div>

        <div className="h-60" />

        <div className="container">
          <h3>Por qué elegir isopanel?</h3>
        </div>

        <div className="container">
          <WhyIsoPanel />
        </div>

        <div className="py-20 bg-slate-100">
          <div className="md:max-w-5xl mx-auto">
            <Blueprints />
          </div>
        </div>
      </main>

      <Footer />

      <FloatWhatsApp/>

      <MenuOverlay open={menuOpen} />

    </>
  )
}
