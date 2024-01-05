import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

export const Layout = () => {
  return (
    <>
    <Header/>
    <main className="container mx-auto flex flex-wrap mt-5 mb-5 justify-center">
        <Outlet />
    </main>
    <Footer/>
    </>
  )
}
