import { Outlet } from "react-router-dom"
import Header from "./Components/Nav"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App