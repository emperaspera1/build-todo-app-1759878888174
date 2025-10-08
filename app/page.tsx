'use client'

import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
