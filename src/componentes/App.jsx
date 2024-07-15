import { Outlet } from "react-router-dom"
import MainHeader from "./MainHeader"
import Footer from "./Footer"


const App = () => {
  return (
    <div>
        <MainHeader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App