import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode="wait">
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-16 md:mt-20 px-4  md:px-16 py-4 w-full">
        <Outlet/>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App
