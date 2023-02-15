import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode="wait">
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-24 p-8 w-full">
        <Outlet/>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App
