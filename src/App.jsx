import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {


  return (
    <div className={"min-h-screen w-full font-inter bg-[url('/src/assets/bg.jpg')] bg-cover px-52 text-[#292423]"}>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
