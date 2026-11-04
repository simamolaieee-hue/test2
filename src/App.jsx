import './App.css'
import Header from './Compo/Header'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import Workk from './Compo/Workk'
import Aboutt from './Compo/Aboutt'
import Mainn from './Mainn/Mainn pictures'
import Main2 from './Mainn/Main2'
import Shop from './Mainn/Shop'
import Worke from './Footer/Worke'
import Eventee from './Footer/Eventee'
import Company from './Mainn/Company'
import End from './Footer/End'
import Search from './InputSearch/Search'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function Home() {
  return (
    <>
      <Mainn />
      <Main2 />
      <Shop />
      <Company />
      <Worke />
      <Eventee />
      <End />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Workk" element={<Workk />} />
          <Route path="/Event" element={<Eventee />} />
          <Route path="/Aboutt" element={<Aboutt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
