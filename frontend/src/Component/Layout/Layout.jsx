import React from 'react'
import { Navbar } from '../Include/Navbar'
import { Footer } from '../Include/Footer'
import { Home } from '../../Component/view/Home'
// import { Skills } from '../pages/Skills'

export const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Home />
        <Footer />

    </>
  )
}
